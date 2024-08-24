import { Document } from 'mongoose';

export interface IAccount extends Document {
    userId: string;
    accountType: string;
    encryptedCredentials: string;
    accountName?: string;
    link?: string;
    description?: string;
    image?: string;
    tags?: string[];
}