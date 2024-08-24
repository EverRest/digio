import { Document } from 'mongoose';

export interface IResource extends Document {
    userId: string;
    name: string;
    url: string;
    resourceType: string;
    encryptedCredentials: string;
    description?: string;
}