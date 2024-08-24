import {forwardRef, Module} from '@nestjs/common';
import {JwtModule, JwtService} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {AuthController} from './auth.controller';
import {JwtStrategy} from './jwt.strategy';
import {AuthService} from './auth.service';
import {ConfigModule} from '@nestjs/config';
import {UserModule} from "../user/user.module";
import {JwtAuthGuard} from "./auth.guard";
import {JwtHelper} from "./jwt.helper";

@Module({
    imports: [
        ConfigModule,
        forwardRef(() => UserModule),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: {expiresIn: '60s'},
        }),
        PassportModule,
    ],
    providers: [AuthService, JwtService, JwtStrategy, JwtAuthGuard, JwtHelper],
    controllers: [AuthController],
    exports: [AuthService, PassportModule, JwtService, JwtAuthGuard, JwtHelper],
})
export class AuthModule {
}