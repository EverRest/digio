import {Document} from 'mongoose';

export interface IProject extends Document {
    userId: string;
    name: string;
    url: string;
    projectType: string;
    encryptedCredentials: string;
    description: string;
    farmDescription?: string;
    tags?: string[];
    start?: Date;
    end?: Date;
}