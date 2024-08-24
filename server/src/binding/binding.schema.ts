import { Schema, Document } from 'mongoose';

export class Binding extends Document {
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

export const BindingSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    entities: [
        {
            type: { type: String, required: true },
            id: { type: String, required: true },
            description: { type: String, required: true },
            relatedTo: [
                {
                    type: { type: String, required: true },
                    id: { type: String, required: true }
                }
            ]
        }
    ]
});