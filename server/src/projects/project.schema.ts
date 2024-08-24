import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class Project extends Document {
    @Prop({type: String, required: true, ref: 'User'})
    userId: string;

    @Prop({type: String, required: true})
    name: string;

    @Prop({type: String, required: true})
    url: string;

    @Prop({type: String, required: true})
    projectType: string;

    @Prop({type: String, required: true})
    encryptedCredentials: string;

    @Prop({type: String, required: true})
    description?: string;

    @Prop({type: String, required: false})
    image?: string;

    @Prop({type: [String], required: false})
    tags?: string[];

    @Prop({type: [String], required: false})
    farmDescription?: string[];

    @Prop({type: Date, required: false})
    start?: Date;

    @Prop({type: Date, required: false})
    end?: Date;
}

const ProjectSchema = SchemaFactory.createForClass(Project);
ProjectSchema.index({ name: 'text', description: 'text', resourceType: 'text' });

export {ProjectSchema};
