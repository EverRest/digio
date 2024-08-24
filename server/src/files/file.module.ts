import {Module} from '@nestjs/common';
import {MulterModule} from '@nestjs/platform-express';
import {FileUploadService} from './file-upload.service';
import {AuthModule} from "../auth/auth.module";
import {FileController} from "./file.controller";

@Module({
    imports: [
        MulterModule.register({
            dest: '../../storage',
        }),
        AuthModule,
    ],
    controllers: [FileController],
    providers: [FileUploadService],
    exports: [FileUploadService],
})
export class FileUploadModule {
}
