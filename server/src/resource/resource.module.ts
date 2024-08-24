    import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { Resource, ResourceSchema } from './resource.schema';
import {CryptoModule} from "../crypto/crypto.module";
import {TagModule} from "../tag/tag.module";
import {AuthModule} from "../auth/auth.module";
import {FileUploadModule} from "../files/file.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Resource.name, schema: ResourceSchema }]),
        CryptoModule,
        TagModule,
        AuthModule,
        FileUploadModule,
        MulterModule.register({ dest: './storage' }),
    ],
    controllers: [ResourceController],
    providers: [ResourceService],
})
export class ResourceModule {}