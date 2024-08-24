import {Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {IUser} from './user.interface';
import {CreateUserDto} from './create-user.dto';
import {UpdateUserDto} from './update-user.dto';
// @ts-ignore
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<IUser>) {
    }

    async findAll(q?: string): Promise<IUser[]> {
        let searchQuery = {};
        if(q) {
            searchQuery = {
                $or: [
                    {"name": {$regex: q, $options: 'i'}},
                    {"email": {$regex: q, $options: 'i'}},
                    {"username": {$regex: q, $options: 'i'}},
                    {"mood": {$regex: q, $options: 'i'}},
                ]
            };
        }
        return this.userModel.find(searchQuery).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const {password, ...rest} = createUserDto;
        if (!(await this.isUnique(rest.username, rest.name, rest.email))) {
            throw new UnprocessableEntityException('Username or name or email already exists');
        }
        const user = new this.userModel({...rest, password});
        return user.save();
    }

    async getUserImage(_id: string): Promise<string> {
        const user = await this.userModel.findOne({_id});
        return user?.image;
    }

    async isUnique(username: string, name: string, email: string): Promise<boolean> {
        const existingUser = await this.userModel.findOne({
            $or: [{name}, {email}, {username}],
        });
        return !existingUser;
    }

    async isUniqueByName(name: string): Promise<boolean> {
        const existingUser = await this.userModel.findOne({
            $or: [{name}],
        });
        return !existingUser;
    }

    async isUniqueByUserName(username: string): Promise<boolean> {
        const existingUser = await this.userModel.findOne({
            $or: [{username}],
        });
        return !existingUser;
    }

    async isUniqueByEmail(email: string): Promise<boolean> {
        const existingUser = await this.userModel.findOne({
            $or: [{email}],
        });
        return !existingUser;
    }

    async findOne(id: string): Promise<IUser> {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async findOneByName(name: string): Promise<IUser> {
        const user = await this.userModel.findOne({username: name}).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async findOneByEmail(email: string): Promise<IUser> {
        const user = await this.userModel.findOne({email}).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async updateUserImage(id: string, imagePath: string): Promise<IUser> {
        const user = await this.userModel.findByIdAndUpdate(id, {image: imagePath}, {new: true}).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const {password, ...updateData} = updateUserDto;
        if (password) {
            throw new UnprocessableEntityException('Password cannot be updated with this endpoint');
        }

        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateData, {new: true}).exec();
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }

    async delete(id: string): Promise<void> {
        const result = await this.userModel.deleteOne({_id: id}).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('User not found');
        }
    }
}