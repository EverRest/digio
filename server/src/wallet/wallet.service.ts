import {Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {IWallet} from './wallet.interface';
import {WalletDto} from './wallet.dto';
import {Wallet} from "./wallet.schema";
import {IAccount} from "../account/account.interface";
import {IResource} from "../resource/resource.interface";

@Injectable()
export class WalletService {
    constructor(@InjectModel(Wallet.name) private walletModel: Model<IWallet>) {
    }

    async create(createWalletDto: WalletDto): Promise<IWallet> {
        const createdWallet = new this.walletModel(createWalletDto);
        return createdWallet.save();
    }

    async findAll(): Promise<IWallet[]> {
        return this.walletModel.find().exec();
    }

    async findAllByUserId(userId: string, query?: string): Promise<IWallet[]> {
        const searchQuery = query
            ? {
                userId,
                $or: [
                    {"address": {$regex: query, $options: 'i'}},
                    {"description": {$regex: query, $options: 'i'}},
                    {"name": {$regex: query, $options: 'i'}},
                    {"walletType": {$regex: query, $options: 'i'}},
                    {"walletName": {$regex: query, $options: 'i'}},
                ]
            }
            : {userId};
        return this.walletModel.find(searchQuery).exec();
    }

    async findOne(id: string): Promise<IWallet> {
        const wallet = await this.walletModel.findById(id).exec();
        if (!wallet) {
            throw new NotFoundException('Wallet not found');
        }
        return wallet;
    }

    async find(options: object): Promise<IWallet | undefined> {
        return this.walletModel.findOne(options).exec();
    }

    async delete(id: string): Promise<IWallet> {
        const wallet = await this.walletModel.findByIdAndDelete(id).exec();
        if (!wallet) {
            throw new NotFoundException('Wallet not found');
        }
        return wallet;
    }

    async addTag(walletId: string, tagName: string): Promise<IWallet> {
        const updatedWallet = await this.walletModel.findOneAndUpdate(
            {_id: walletId},
            {$addToSet: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedWallet) {
            throw new NotFoundException('Wallet not found');
        }
        return updatedWallet;
    }


    async removeTag(walletId: string, tagName: string): Promise<IWallet> {
        const updatedWallet = await this.walletModel.findOneAndUpdate(
            {_id: walletId},
            {$pull: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedWallet) {
            throw new NotFoundException('Wallet not found');
        }
        return updatedWallet;
    }

    async isUnique(address: string, walletName: string): Promise<boolean> {
        const existingWallet = await this.walletModel.findOne({
            $or: [{address}, {walletName}],
        });
        return !existingWallet;
    }

    async updateWalletImage(_id: string, imageUrl: string): Promise<IWallet> {
        const updatedWallet = await this.walletModel.findOneAndUpdate(
            {_id},
            {image: imageUrl},
            {new: true}
        ).exec();
        if (!updatedWallet) {
            throw new NotFoundException('Wallet not found');
        }
        return updatedWallet;
    }

    async getWalletImage(_id: string): Promise<string> {
        const wallet = await this.walletModel.findById(_id).exec();
        if (!wallet) {
            throw new NotFoundException('Wallet not found');
        }
        return wallet.image;
    }
}