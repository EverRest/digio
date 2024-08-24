import {IsNotEmpty, IsObject, IsOptional, IsString} from "class-validator";

export class WalletDto {
    @IsNotEmpty()
    @IsString()
    walletName: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    walletType?: string;

    @IsNotEmpty()
    @IsObject()
    encryptedCredentials: object;

    @IsOptional()
    @IsString()
    description?: string;
}