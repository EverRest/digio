import { IsString, IsEmail, IsOptional } from 'class-validator';

export class RegisterDto {
    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    role: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    brief?: string;

    @IsString()
    @IsOptional()
    mood?: string;

    @IsString()
    @IsOptional()
    status?: string;
}