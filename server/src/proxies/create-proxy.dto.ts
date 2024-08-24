import {IsJSON, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateProxyDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    @IsString()
    projectType: string;

    @IsNotEmpty()
    encryptedCredentials: object;

    @IsOptional()
    @IsString()
    description?: string;
}