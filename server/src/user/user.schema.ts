import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({type: String, required: true})
    password: string;

    @Prop({type: String, required: true, unique: true})
    email: string;

    @Prop({type: String, required: true,})
    role: string;

    @Prop({type: String, required: true, unique: true})
    username: string;

    @Prop({type: String, required: true, unique: true})
    name: string;

    @Prop()
    image?: string;

    @Prop()
    brief?: string;

    @Prop({type: String, required: false, unique: false})
    mood?: string;

    @Prop()
    status?: string;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({name: 'text', username: 'text', email: 'text', mood: 'text'});
export {UserSchema};