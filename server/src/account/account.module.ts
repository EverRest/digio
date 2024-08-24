import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Account, AccountSchema } from './account.schema';
import {CryptoModule} from "../crypto/crypto.module";
import {TagModule} from "../tag/tag.module";
import {AuthModule} from "../auth/auth.module";
import {FileUploadModule} from "../files/file.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
        CryptoModule,
        TagModule,
        AuthModule,
        FileUploadModule,
        MulterModule.register({ dest: './storage' }),
    ],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule {}