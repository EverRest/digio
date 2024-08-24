import {forwardRef, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {TagModule} from './tag/tag.module';
import {NewsModule} from './news/news.module';
import {WalletModule} from './wallet/wallet.module';
import {ResourceModule} from './resource/resource.module';
import {AccountModule} from './account/account.module';
import {CryptoModule} from './crypto/crypto.module';
import {BindingModule} from './binding/binding.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {ProjectModule} from "./projects/project.module";

@Module({
    imports: [
        UserModule,
        NewsModule,
        AuthModule,
        TagModule,
        WalletModule,
        CryptoModule,
        ResourceModule,
        AccountModule,
        BindingModule,
        ProjectModule,
        forwardRef(() => AuthModule),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'storage'),
            serveRoot: '/storage',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}