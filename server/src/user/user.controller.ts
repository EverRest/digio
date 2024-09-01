import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
    UsePipes,
    ValidationPipe,
    UseGuards, UseInterceptors, UploadedFile, BadRequestException, Request, Query,
} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './create-user.dto';
import {UpdateUserDto} from './update-user.dto';
import {IdParamDto} from '../dto/id-param.dto';
import {JwtAuthGuard} from '../auth/auth.guard';
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../files/file-upload.service";
import {Express} from "express";
import {join} from "path";

@Controller('api/users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly fileUploadService: FileUploadService,
    ) {
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() createUserDto:     CreateUserDto) {
        return this.userService.create(createUserDto);
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
            await this.userService.updateUserImage(id, photoUrl);
            return {message: 'File uploaded successfully', path: photoUrl};
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(@Request() req: any,  @Query('q') q?: string) {
        return this.userService.findAll(q);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findOne(@Param() params: IdParamDto) {
        return this.userService.findOne(params.id);
    }
    @Get(':id/avatar')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async getUserAvatar(@Param() params: IdParamDto) {
        const avatarUrl = await this.userService.getUserImage(params.id);
        return { "image": join(__dirname, '..', '..', avatarUrl) };
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async update(@Param() params: IdParamDto, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(params.id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async delete(@Param() params: IdParamDto): Promise<void> {
        return this.userService.delete(params.id);
    }
}
