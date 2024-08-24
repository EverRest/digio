import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Account} from './account.schema';
import {CreateAccountDto} from './create-account.dto';
import {IAccount} from './account.interface';
import {IWallet} from "../wallet/wallet.interface";
import {IUser} from "../user/user.interface";

@Injectable()
export class AccountService {
    constructor(@InjectModel(Account.name) private accountModel: Model<IAccount>) {
    }

    async create(createAccountDto: CreateAccountDto): Promise<IAccount> {
        const createdAccount = new this.accountModel(createAccountDto);
        return createdAccount.save();
    }

    async findAll(): Promise<IAccount[]> {
        return this.accountModel.find().exec();
    }

    async findOne(id: string): Promise<IAccount> {
        const account = await this.accountModel.findById(id).exec();
        if (!account) {
            throw new NotFoundException('Account not found');
        }
        return account;
    }

    async delete(id: string): Promise<IAccount> {
        const deletedAccount = await this.accountModel.findByIdAndDelete(id).exec();
        if (!deletedAccount) {
            throw new NotFoundException('Account not found');
        }
        return deletedAccount;
    }

    async addTag(accountId: string, tagName: string): Promise<IAccount> {
        const updatedAccount = await this.accountModel.findOneAndUpdate(
            {_id: accountId},
            {$addToSet: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedAccount) {
            throw new NotFoundException('Account not found');
        }
        return updatedAccount;
    }

    async removeTag(accountId: string, tagName: string): Promise<IAccount> {
        const updatedAccount = await this.accountModel.findOneAndUpdate(
            {_id: accountId},
            {$pull: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedAccount) {
            throw new NotFoundException('Account not found');
        }
        return updatedAccount;
    }

    async updateAccountImage(id: string, imagePath: string): Promise<IAccount> {
        const account = await this.accountModel.findByIdAndUpdate(id, {image: imagePath}, {new: true}).exec();
        if (!account) {
            throw new NotFoundException('Account not found');
        }
        return account;
    }

    async findAllByUserId(userId: string, q?: string): Promise<IAccount[]> {
        const searchQuery = q
            ? {
                userId,
                $or: [
                    {"description": {$regex: q, $options: 'i'}},
                    {"accountType": {$regex: q, $options: 'i'}},
                    {"accountName": {$regex: q, $options: 'i'}},
                ]
            }
            : {userId};
        return this.accountModel.find(searchQuery).exec();
    }

    async getAccountImage(_id: string): Promise<string> {
        const account = await this.accountModel.findOne({_id});
        return account?.image;
    }
}