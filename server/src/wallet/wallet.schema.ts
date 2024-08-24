import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class Wallet extends Document {
    @Prop({required: true, ref: 'User', type: String})
    userId: string;

    @Prop({required: true, type: String})
    encryptedCredentials: string;

    @Prop({required: true, type: String})
    name: string;

    @Prop({required: true, unique: true, type: String})
    walletName: string;

    @Prop({required: true, unique: true, type: String})
    address: string;

    @Prop({type: String})
    walletType?: string;

    @Prop({type: String})
    description?: string;

    @Prop({type: String})
    image?: string;

    @Prop({type: [String]})
    tags?: string[];
}

const  WalletSchema = SchemaFactory.createForClass(Wallet);
WalletSchema.index({ name: 'text', description: 'text', walletType: 'text', walletName: 'text' });
export { WalletSchema };