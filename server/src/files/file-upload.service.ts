import {Injectable, BadRequestException} from '@nestjs/common';
import {join} from 'path';
import {promises as fsPromises} from 'fs';

@Injectable()
export class FileUploadService {
    protected readonly uploadDirectory = join(__dirname, '../../storage');

    async uploadTempFileAndMove(file: Express.Multer.File, id: string, subDirectory: string = ''): Promise<string> {
        const tempFilePath = file.path;
        let fileBuffer: Buffer;
        try {
            fileBuffer = await fsPromises.readFile(tempFilePath);
            console.log('File read successfully:', tempFilePath);
        } catch (error) {
            console.error('Failed to read temporary file:', tempFilePath, error);
            throw new BadRequestException('Failed to read temporary file');
        }
        const originalExtension = file.originalname.split('.').pop();
        const finalFileName = `${id}.${originalExtension}`;
        const finalFilePath = join(this.uploadDirectory, subDirectory, finalFileName);
        try {
            await fsPromises.writeFile(finalFilePath, fileBuffer);
        } catch (error) {
            console.error('Failed to write file to final destination:', finalFilePath, error);
            throw new BadRequestException('Failed to write file to final destination');
        }
        try {
            await fsPromises.unlink(tempFilePath);
        } catch (error) {
            console.error('Failed to delete temporary file:', tempFilePath, error);
            throw new BadRequestException('Failed to delete temporary file');
        }
        return finalFileName;
    }

    async removeFile(filePath: string): Promise<void> {
        try {
            await fsPromises.unlink(filePath);
            console.log('File successfully deleted:', filePath);
        } catch (error) {
            console.error('Failed to delete file:', filePath, error);
            throw new BadRequestException('Failed to delete file');
        }
    }

    async fileExists(filePath: string): Promise<boolean> {
        try {
            await fsPromises.access(filePath);
            return true;
        } catch {
            return false;
        }
    }
}
