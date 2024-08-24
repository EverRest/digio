import { Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    name: string;
    email: string;
    role: string;
    password: string;
    image?: string;
    brief?: string;
    mood?: string;
    status?: string;
}