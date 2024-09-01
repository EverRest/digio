import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param, Patch,
    Post,
    Query,
    Request,
    UnprocessableEntityException,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {WalletService} from './wallet.service';
import {WalletDto} from './wallet.dto';
import {EncryptionService} from "../crypto/encryption.service";
import {Wallet} from "./wallet.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {IWallet} from "./wallet.interface";
import {TagService} from "../tag/tag.service";
import {JwtAuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {Express} from "express";
import {FileUploadService} from "../files/file-upload.service";
import {JwtService} from '@nestjs/jwt';
import {ITag} from "../tag/tag.interface";

@Controller('api/wallets')
export class WalletController {
    constructor(
        private readonly walletService: WalletService,
        private encryptionService: EncryptionService,
        private readonly tagService: TagService,
        private readonly fileUploadService: FileUploadService,
        private jwtService: JwtService,
        @InjectModel(Wallet.name) private walletModel: Model<IWallet>
    ) {
    }

    @Patch(':walletId/users/:userId')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async shareWallet(
        @Param('walletId') walletId: string,
        @Param('userId') userId: string,
        @Request() req: any
    ) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const currentUserId: string = decoded.id;
        const wallet: IWallet = await this.walletService.findOne(walletId);
        if (wallet.userId !== currentUserId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        const decryptedCredentials: string = this.encryptionService.decryptData(wallet.encryptedCredentials, currentUserId);
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(decryptedCredentials), userId);
        const newWalletData = {
            ...wallet.toObject(),
            userId,
            encryptedCredentials,
        };
        delete newWalletData._id; // Remove the original ID to create a new document
        const newWallet = new this.walletModel(newWalletData);
        return newWallet.save();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() createWalletDto: WalletDto, @Request() req: any) {
        if (!(await this.walletService.isUnique(createWalletDto.address, createWalletDto.walletName))) {
            throw new UnprocessableEntityException('Wallet with same address or walletName is already exists.');
        }
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        const credentialsJson: string = JSON.stringify(createWalletDto.encryptedCredentials);
        const encryptedCredentials: string = this.encryptionService.encryptData(credentialsJson, userId);
        const name: string = this.encryptionService.encryptData(createWalletDto.walletName, userId);
        const modifiedWalletDto = {...createWalletDto, encryptedCredentials, name, userId};
        const createdAccount = new this.walletModel(modifiedWalletDto);
        return createdAccount.save();
    }

    @Post(':id/avatar')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file', {
        limits: {fileSize: 50 * 1024 * 1024},  // 50MB
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return callback(new BadRequestException('Only image files are allowed!'), false);
            }
            callback(null, true);
        },
    }))
    async uploadUserPhoto(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
        try {
            const photoUrl = await this.fileUploadService.uploadTempFileAndMove(file, id);
            await this.walletService.updateWalletImage(id, photoUrl);
            return {message: 'File uploaded successfully', path: photoUrl};
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(@Request() req: any, @Query('q') q?: string): Promise<any[]> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        if (!decoded || !decoded.id) {
            throw new BadRequestException('Invalid token payload');
        }
        const userId: string = decoded.id;
        return await this.walletService.findAllByUserId(userId, q);
    }

    @Post(':id/tags/:tagId')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addTag(@Param('id') id: string, @Param('tagId') tagId: string, @Request() req: any): Promise<IWallet> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        if (!decoded || !decoded.id) {
            throw new BadRequestException('Invalid token payload');
        }
        const userId: string = decoded.id;
        const tag: ITag = await this.tagService.findOne(tagId);
        if (!tag) {
            throw new UnprocessableEntityException('Tag not found');
        }
        let wallet: IWallet = await this.walletService.findOne(id);
        if (wallet.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.walletService.addTag(id, tag.name);
    }

    @Delete(':id/tags/:tagId')
    @UseGuards(JwtAuthGuard)
    async removeTag(@Param('id') id: string, @Param('tagId') tagId: string,) {
        const tag: ITag = await this.tagService.findOne(tagId);
        if (!tag) {
            throw new UnprocessableEntityException('Tag not found');
        }
        return this.walletService.removeTag(id, tag.name);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async decryptCredentials(@Param('id') id: string, @Request() req: any): Promise<any> {
        let wallet: IWallet = await this.walletService.findOne(id);
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        if (!decoded || !decoded.id) {
            throw new BadRequestException('Invalid token payload');
        }
        const userId: string = decoded.id;
        try {
            let decryptedString = this.encryptionService.decryptData(wallet.encryptedCredentials, userId);
            let encryptedCredentials = JSON.parse(decryptedString);
            return {
                ...wallet.toJSON(),
                encryptedCredentials
            };
        } catch (error) {
            console.error('Decryption or parsing error:', error);
            throw new BadRequestException('Failed to decrypt credentials');
        }
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string): Promise<IWallet> {
        return this.walletService.delete(id);
    }
}