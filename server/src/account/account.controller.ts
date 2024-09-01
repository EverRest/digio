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
import {AccountService} from './account.service';
import {CreateAccountDto} from './create-account.dto';
import {EncryptionService} from '../crypto/encryption.service';
import {Account} from "./account.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IAccount} from "./account.interface";
import {TagService} from "../tag/tag.service";
import {JwtAuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../files/file-upload.service";
import {JwtService} from '@nestjs/jwt';
import {ITag} from "../tag/tag.interface";

@Controller('api/accounts')
export class AccountController {
    constructor(
        @InjectModel(Account.name) private accountModel: Model<IAccount>,
        private readonly accountService: AccountService,
        private encryptionService: EncryptionService,
        private readonly tagService: TagService,
        private readonly fileUploadService: FileUploadService,
        private jwtService: JwtService
    ) {
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
    async uploadAccountAvatar(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
        try {
            const avatarUrl = await this.fileUploadService.uploadTempFileAndMove(file, id);
            await this.accountService.updateAccountImage(id, avatarUrl);
            return {message: 'File uploaded successfully', path: avatarUrl};
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch(':accountId/users/:userId')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async shareAccount(
        @Param('accountId') accountId: string,
        @Param('userId') userId: string,
        @Request() req: any
    ) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const currentUserId: string = decoded.id;
        const account: Account = await this.accountService.findOne(accountId);
        if (account.userId !== currentUserId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        const decryptedCredentials = this.encryptionService.decryptData(account.encryptedCredentials, currentUserId);
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(decryptedCredentials), userId);
        const newAccountData = {
            ...account.toObject(),
            userId,
            encryptedCredentials,
        };
        delete newAccountData._id;
        const newAccount = new this.accountModel(newAccountData);
        return newAccount.save();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() createAccountDto: CreateAccountDto, @Request() req: any) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(createAccountDto.encryptedCredentials), userId);
        const modifiedCreateAccountDto = {...createAccountDto, encryptedCredentials, userId};
        const createdAccount = new this.accountModel(modifiedCreateAccountDto);
        return createdAccount.save();
    }

    @Post(':id/tags/:tagId')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async addTag(@Param('id') id: string, @Param('tagId') tagId: string, @Request() req: any) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        const tag: ITag = await this.tagService.findOne(tagId);
        if (!tag) {
            throw new UnprocessableEntityException('Tag not found');
        }
        let account: IAccount = await this.accountService.findOne(id);
        if (account.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.accountService.addTag(id, tag.name);
    }

    @Delete(':id/tags/:tagId')
    @UseGuards(JwtAuthGuard)
    async removeTag(@Param('id') id: string, @Param('tagId') tagId: string, @Request() req: any) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        const tag: ITag = await this.tagService.findOne(tagId);
        if (!tag) {
            throw new UnprocessableEntityException('Tag not found');
        }
        let account: IAccount = await this.accountService.findOne(id);
        if (account.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.accountService.removeTag(id, tag.name);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(@Request() req: any, @Query('q') q?: string): Promise<any[]> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        return await this.accountService.findAllByUserId(userId, q);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async decryptCredentials(@Param('id') id: string, @Request() req: any) {
        let account: IAccount = await this.accountService.findOne(id);
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        try {
            let decryptedString = this.encryptionService.decryptData(account.encryptedCredentials, userId);
            let encryptedCredentials = JSON.parse(decryptedString);
            return {
                ...account.toJSON(),
                encryptedCredentials
            };
        } catch (error) {
            console.error('Decryption or parsing error:', error);
            throw new BadRequestException('Failed to decrypt credentials');
        }
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string, @Request() req: any): Promise<IAccount> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        let account: IAccount = await this.accountService.findOne(id);
        if (account.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.accountService.delete(id);
    }
}