import { Document } from 'mongoose';

export interface IWallet extends Document {
    userId: string;
    encryptedCredentials: string;
    address: string;
    name: string;
    walletName: string;
    walletType?: string;
    description?: string;
    image?: string;
    tags?: string[];
}