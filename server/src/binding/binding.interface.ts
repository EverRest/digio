import { Document } from 'mongoose';

export interface IBinding extends Document {
    name: string;
    description: string;
    entities: {
        type: string;
        id: string;
        description: string;
        relatedTo?: {
            type: string;
            id: string;
        }[];
    }[];
}