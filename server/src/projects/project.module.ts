    import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project, ProjectSchema } from './project.schema';
import {CryptoModule} from "../crypto/crypto.module";
import {TagModule} from "../tag/tag.module";
import {AuthModule} from "../auth/auth.module";
import {FileUploadModule} from "../files/file.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
        CryptoModule,
        TagModule,
        AuthModule,
        FileUploadModule,
        MulterModule.register({ dest: './storage' }),
    ],
    controllers: [ProjectController],
    providers: [ProjectService],
})
export class ProjectModule {}