import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './register.dto';
import { IUser } from '../user/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    private async generateToken(user: IUser): Promise<{ access_token: string, token_expiration_date: number }> {
        const payload = { email: user.email, id: user.id };
        const token = await this.jwtService.signAsync(payload, {
            secret: process.env.JWT_SECRET_KEY,
            expiresIn: '60m',
        });
        return {
            access_token: token,
            token_expiration_date: Date.now() + 60 * 60 * 1000,
        };
    }

    private getUserData(user: IUser) {
        const { password, ...userWithoutPassword } = user.toObject ? user.toObject() : user;
        return userWithoutPassword;
    }

    async login(email: string, password: string) {
        const user: IUser = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new HttpException('Invalid password', HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const { access_token, token_expiration_date } = await this.generateToken(user);
        return {
            data: this.getUserData(user),
            access_token,
            token_expiration_date,
        };
    }

    async register(registerDto: RegisterDto) {
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const user: IUser = await this.userService.create({
            ...registerDto,
            password: hashedPassword,
        });
        const { access_token, token_expiration_date } = await this.generateToken(user);
        return {
            data: this.getUserData(user),
            access_token,
            token_expiration_date,
        };
    }

    async logout(req) {
        req.logout();
        return {
            message: 'Logged out',
        };
    }

    validateToken(token: string) {
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            console.error('JWT_SECRET_KEY is not set in the environment variables.');
            throw new Error('Internal server error');
        }
        try {
            return this.jwtService.verify(token, { secret: secretKey });
        } catch (error) {
            console.error('Token validation error:', error);
            throw error;
        }
    }
}