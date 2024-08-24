import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param, Patch,
    Post,
    Put,
    Request,
    UnprocessableEntityException,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {ResourceService} from './resource.service';
import {CreateResourceDto} from './create-resource.dto';
import {Resource} from "./resource.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {EncryptionService} from "../crypto/encryption.service";
import {TagService} from "../tag/tag.service";
import {JwtAuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../files/file-upload.service";
import {JwtService} from '@nestjs/jwt';
import {ITag} from "../tag/tag.interface";
import { Query } from '@nestjs/common';

@Controller('resources')
export class ResourceController {
    constructor(
        @InjectModel(Resource.name) private resourceModel: Model<Resource>,
        private encryptionService: EncryptionService,
        private readonly resourceService: ResourceService,
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
            const imageUrl = await this.fileUploadService.uploadTempFileAndMove(file, id);
            await this.resourceService.updateResourceImage(id, imageUrl);
            return {message: 'File uploaded successfully', path: imageUrl};
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() createResourceDto: CreateResourceDto, @Request() req: any) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(createResourceDto.encryptedCredentials), userId);
        const modifiedCreateResourceDto = {...createResourceDto, encryptedCredentials, userId};
        const createdResource = new this.resourceModel(modifiedCreateResourceDto);
        return createdResource.save();
    }

    @Patch(':resourceId/users/:userId')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    async shareResource(
        @Param('resourceId') resourceId: string,
        @Param('userId') userId: string,
        @Request() req: any
    ) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const currentUserId: string = decoded.id;
        const resource: Resource = await this.resourceService.findOne(resourceId);
        if (resource.userId !== currentUserId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        const decryptedCredentials = this.encryptionService.decryptData(resource.encryptedCredentials, currentUserId);
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(decryptedCredentials), userId);
        const newResourceData = {
            ...resource.toObject(),
            userId,
            encryptedCredentials,
        };
        delete newResourceData._id; // Remove the original ID to create a new document
        const newResource = new this.resourceModel(newResourceData);
        return newResource.save();
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(@Request() req: any, @Query('q') q?: string): Promise<any[]> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        return await this.resourceService.findAllByUserId(userId, q);
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
        let resource: Resource = await this.resourceService.findOne(id);
        if (resource.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.resourceService.addTag(id, tag.name);
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
        let resource: Resource = await this.resourceService.findOne(id);
        if (resource.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.resourceService.removeTag(id, tag.name);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async decryptCredentials(@Param('id') id: string, @Request() req: any) {
        let resource: Resource = await this.resourceService.findOne(id);
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        try {
            let decryptedString = this.encryptionService.decryptData(resource.encryptedCredentials, userId);
            let encryptedCredentials = JSON.parse(decryptedString);
            return {
                ...resource.toJSON(),
                encryptedCredentials
            };
        } catch (error) {
            console.error('Decryption or parsing error:', error);
            throw new BadRequestException('Failed to decrypt credentials');
        }
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string, @Request() req: any): Promise<Resource> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        let resource: Resource = await this.resourceService.findOne(id);
        if (resource.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        return this.resourceService.delete(id);
    }
}