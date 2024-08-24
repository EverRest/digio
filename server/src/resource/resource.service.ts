import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Resource, ResourceSchema} from './resource.schema';
import {CreateResourceDto} from './create-resource.dto';
import {IResource} from "./resource.interface";

@Injectable()
export class ResourceService {
    constructor(@InjectModel(Resource.name) private resourceModel: Model<IResource>) {
    }

    async create(createResourceDto: CreateResourceDto): Promise<IResource> {
        const createdResource = new this.resourceModel(createResourceDto);
        return createdResource.save();
    }

    async findAll(): Promise<IResource[]> {
        return this.resourceModel.find().exec();
    }

    async findOne(id: string): Promise<IResource> {
        return await this.resourceModel.findById(id).exec();
    }

    async delete(id: string): Promise<IResource> {
        const deletedResource = await this.resourceModel.findByIdAndDelete(id).exec();
        if (!deletedResource) {
            throw new NotFoundException('Resource not found');
        }
        return deletedResource;
    }

    async findAllByUserId(userId: string, query?: string): Promise<IResource[]> {
        const searchQuery = query
            ? {
                userId,
                $or: [
                    {"name": {$regex: query, $options: 'i'}},
                    {"description": {$regex: query, $options: 'i'}},
                    {"resourceType": {$regex: query, $options: 'i'}},
                ]
            }
            : {userId};
        return await this.resourceModel.find(searchQuery).exec();
    }

    async addTag(resourceId: string, tagName: string): Promise<IResource> {
        const updatedResource = await this.resourceModel.findOneAndUpdate(
            {_id: resourceId},
            {$addToSet: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedResource) {
            throw new NotFoundException('Resource not found');
        }
        return updatedResource;
    }

    async removeTag(resourceId: string, tagName: string): Promise<IResource> {
        const updatedResource = await this.resourceModel.findOneAndUpdate(
            {_id: resourceId},
            {$pull: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedResource) {
            throw new NotFoundException('Resource not found');
        }
        return updatedResource;
    }

    async updateResourceImage(_id: string, imageUrl: string): Promise<IResource> {
        const updatedResource = await this.resourceModel.findOneAndUpdate(
            {_id},
            {image: imageUrl},
            {new: true}
        ).exec();
        if (!updatedResource) {
            throw new NotFoundException('Resource not found');
        }
        return updatedResource;
    }
}