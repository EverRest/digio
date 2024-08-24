import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITag } from './tag.interface';
import { CreateTagDto, UpdateTagDto } from './tag.dto';

@Injectable()
export class TagService {
    constructor(@InjectModel('Tag') private readonly tagModel: Model<ITag>) {}

    async create(createTagDto: CreateTagDto): Promise<ITag> {
        const createdTag = new this.tagModel(createTagDto);
        return createdTag.save();
    }

    async findAll(): Promise<ITag[]> {
        return this.tagModel.find().exec();
    }

    async findOne(id: string): Promise<ITag> {
        return this.tagModel.findById(id).exec();
    }

    async update(id: string, updateTagDto: UpdateTagDto): Promise<ITag> {
        return this.tagModel.findByIdAndUpdate(id, updateTagDto, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return this.tagModel.findByIdAndDelete(id).exec();
    }
}