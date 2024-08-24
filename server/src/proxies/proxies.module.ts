    import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProxyController } from './proxy.controller';
import { ProxiesService } from './proxies.service';
import { Project, ProxySchema } from './proxy.schema';
import {CryptoModule} from "../crypto/crypto.module";
import {TagModule} from "../tag/tag.module";
import {AuthModule} from "../auth/auth.module";
import {FileUploadModule} from "../files/file.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Project.name, schema: ProxySchema }]),
        CryptoModule,
        TagModule,
        AuthModule,
        FileUploadModule,
        MulterModule.register({ dest: './storage' }),
    ],
    controllers: [ProxyController],
    providers: [ProxiesService],
})
export class ProxiesModule {}