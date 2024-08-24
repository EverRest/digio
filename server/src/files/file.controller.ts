import { Controller, Get, Post, UseInterceptors, UploadedFile, Res, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { promises as fs } from 'fs';
import { join } from 'path';
import * as path from 'path';
import { FileUploadService } from './file-upload.service';

@Controller('files')
export class FileController {
    constructor(private readonly fileUploadService: FileUploadService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const savedFilePath : string = await this.fileUploadService.uploadTempFileAndMove(file, 'uniqueIdentifier');
        return { message: 'File uploaded successfully', path: savedFilePath };
    }

    @Get(':filename')
    async serveFile(@Param('filename') filename: string, @Res() res: Response) {
        const filePath : string = join(__dirname, '../../storage', filename);
        try {
            const file : Buffer = await fs.readFile(filePath);
            const extension : string = path.extname(filename).toLowerCase();
            const mimeTypes = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
            };
            const contentType = mimeTypes[extension] || 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.send(file);
        } catch (error) {
            res.status(404).send('File not found');
        }
    }
}