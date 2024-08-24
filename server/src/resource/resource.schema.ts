import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class Resource extends Document {
    @Prop({type: String, required: true, ref: 'User'})
    userId: string;

    @Prop({type: String, required: true})
    name: string;

    @Prop({type: String, required: true})
    url: string;

    @Prop({type: String, required: true})
    resourceType: string;

    @Prop({type: String, required: true})
    encryptedCredentials: string;

    @Prop({type: String, required: true})
    description?: string;

    @Prop({type: String, required: false})
    image?: string;

    @Prop({type: [String], required: false})
    tags?: string[];
}

const ResourceSchema = SchemaFactory.createForClass(Resource);
ResourceSchema.index({ name: 'text', description: 'text', resourceType: 'text' });

export {ResourceSchema};
