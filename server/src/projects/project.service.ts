import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Project, ProjectSchema} from './project.schema';
import {CreateProjectDto} from './create-project.dto';
import {IProject} from "./project.interface";

@Injectable()
export class ProjectService {
    constructor(@InjectModel(Project.name) private projectModel: Model<IProject>) {
    }

    async create(createResourceDto: CreateProjectDto): Promise<IProject> {
        const createdResource = new this.projectModel(createResourceDto);
        return createdResource.save();
    }

    async findAll(): Promise<IProject[]> {
        return this.projectModel.find().exec();
    }

    async findOne(id: string): Promise<IProject> {
        return await this.projectModel.findById(id).exec();
    }

    async delete(id: string): Promise<IProject> {
        const deletedResource = await this.projectModel.findByIdAndDelete(id).exec();
        if (!deletedResource) {
            throw new NotFoundException('Resource not found');
        }
        return deletedResource;
    }

    async findAllByUserId(userId: string, query?: string): Promise<IProject[]> {
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
        return await this.projectModel.find(searchQuery).exec();
    }

    async addTag(resourceId: string, tagName: string): Promise<IProject> {
        const updatedResource = await this.projectModel.findOneAndUpdate(
            {_id: resourceId},
            {$addToSet: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedResource) {
            throw new NotFoundException('Resource not found');
        }
        return updatedResource;
    }

    async removeTag(resourceId: string, tagName: string): Promise<IProject> {
        const updatedResource = await this.projectModel.findOneAndUpdate(
            {_id: resourceId},
            {$pull: {tags: tagName}},
            {new: true}
        ).exec();
        if (!updatedResource) {
            throw new NotFoundException('Resource not found');
        }
        return updatedResource;
    }

    async updateProjectImage(_id: string, imageUrl: string): Promise<IProject> {
        const updatedProject = await this.projectModel.findOneAndUpdate(
            {_id},
            {image: imageUrl},
            {new: true}
        ).exec();
        if (!updatedProject) {
            throw new NotFoundException('Project not found');
        }
        return updatedProject;
    }
}