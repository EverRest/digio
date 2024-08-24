import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class Account extends Document {
    @Prop({type: String, required: true, ref: 'User'})
    userId: string;

    @Prop({type: String, required: true})
    accountType: string;

    @Prop({type: String, required: true})
    encryptedCredentials: string;

    @Prop({type: String, required: false})
    accountName?: string;

    @Prop()
    link?: string;

    @Prop({type: String})
    description?: string;

    @Prop()
    image?: string;

    @Prop([String])
    tags?: string[];
}

const AccountSchema = SchemaFactory.createForClass(Account);
AccountSchema.index({accountName: 'text', description: 'text', accountType: 'text'});
export {AccountSchema};