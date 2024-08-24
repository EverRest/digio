import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Wallet, WalletSchema} from './wallet.schema';
import {WalletService} from './wallet.service';
import {WalletController} from './wallet.controller';
import {CryptoModule} from "../crypto/crypto.module";
import {TagModule} from "../tag/tag.module";
import {JwtService} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";
import {FileUploadModule} from "../files/file.module";
import {MulterModule} from "@nestjs/platform-express";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Wallet.name, schema: WalletSchema}]),
        CryptoModule,
        TagModule,
        AuthModule,
        FileUploadModule,
        MulterModule.register({dest: './storage'}),
    ],
    controllers: [WalletController],
    providers: [WalletService],
})
export class WalletModule {
}