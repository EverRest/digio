import {IsJSON, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateResourceDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    @IsString()
    resourceType: string;

    @IsNotEmpty()
    encryptedCredentials: object;

    @IsOptional()
    @IsString()
    description?: string;
}