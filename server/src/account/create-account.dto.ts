import {IsJSON, IsNotEmpty, IsObject, IsString} from "class-validator";

export class CreateAccountDto {
    @IsString()
    accountType: string;

    @IsNotEmpty()
    @IsObject()
    encryptedCredentials: object;

    @IsString()
    accountName?: string;

    @IsString()
    link?: string;

    @IsString()
    description?: string;
}