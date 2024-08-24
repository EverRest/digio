import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param, Patch,
    Post,
    Request,
    UnprocessableEntityException,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {ProjectService} from './project.service';
import {CreateProjectDto} from './create-project.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {EncryptionService} from "../crypto/encryption.service";
import {TagService} from "../tag/tag.service";
import {JwtAuthGuard} from "../auth/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../files/file-upload.service";
import {JwtService} from '@nestjs/jwt';
import {ITag} from "../tag/tag.interface";
import {Query} from '@nestjs/common';
import {Project, ProjectSchema} from "./project.schema";
import {IProject} from "./project.interface";

@Controller('projects')
export class ProjectController {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>,
        private encryptionService: EncryptionService,
        private readonly projectService: ProjectService,
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
            await this.projectService.updateProjectImage(id, imageUrl);
            return {message: 'File uploaded successfully', path: imageUrl};
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch(':projectId/users/:userId')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async shareProject(
        @Param('projectId') projectId: string,
        @Param('userId') userId: string,
        @Request() req: any
    ) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const currentUserId: string = decoded.id;
        const project: IProject = await this.projectService.findOne(projectId);
        if (project.userId !== currentUserId) {
            throw new UnprocessableEntityException('You do not have permission to access this resource');
        }
        const decryptedCredentials = this.encryptionService.decryptData(project.encryptedCredentials, currentUserId);
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(decryptedCredentials), userId);
        const newProjectData = {
            ...project.toObject(),
            userId,
            encryptedCredentials,
        };
        delete newProjectData._id; // Remove the original ID to create a new document
        const newProject = new this.projectModel(newProjectData);
        return newProject.save();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() createProjectDto: CreateProjectDto, @Request() req: any) {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        const encryptedCredentials: string = this.encryptionService.encryptData(JSON.stringify(createProjectDto.encryptedCredentials), userId);
        const modifiedCreateProjectDto = {...createProjectDto, encryptedCredentials, userId};
        const createdProject = new this.projectModel(modifiedCreateProjectDto);
        return createdProject.save();
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(@Request() req: any, @Query('q') q?: string): Promise<any[]> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        return await this.projectService.findAllByUserId(userId, q);
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
        let project: IProject = await this.projectService.findOne(id);
        if (project.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this project');
        }
        return this.projectService.addTag(id, tag.name);
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
        let project: IProject = await this.projectService.findOne(id);
        if (project.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this project');
        }
        return this.projectService.removeTag(id, tag.name);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async decryptCredentials(@Param('id') id: string, @Request() req: any) {
        let project: IProject = await this.projectService.findOne(id);
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        try {
            let decryptedString = this.encryptionService.decryptData(project.encryptedCredentials, userId);
            let encryptedCredentials = JSON.parse(decryptedString);
            return {
                ...project.toJSON(),
                encryptedCredentials
            };
        } catch (error) {
            console.error('Decryption or parsing error:', error);
            throw new BadRequestException('Failed to decrypt credentials');
        }
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string, @Request() req: any): Promise<IProject> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded: { id: string } = this.jwtService.decode(token) as { id: string };
        const userId: string = decoded.id;
        let project: IProject = await this.projectService.findOne(id);
        if (project.userId !== userId) {
            throw new UnprocessableEntityException('You do not have permission to access this project');
        }
        return this.projectService.delete(id);
    }
}