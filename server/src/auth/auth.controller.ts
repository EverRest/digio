import {Controller, Post, Body, Request, UsePipes, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import {CreateUserDto} from "../user/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
        async login(@Body('username') email: string, @Body('password') password: string) {
        return this.authService.login(email, password);
    }

    @Post('register')
    @UsePipes(new ValidationPipe({ transform: true }))
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @Post('logout')
    async logout(@Request() req) {
        return this.authService.logout(req);
    }
}