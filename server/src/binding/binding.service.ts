import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Binding } from './binding.schema';
import { CreateBindingDto } from './create-binding.dto';
import { UpdateBindingDto } from './update-binding.dto';
import { IBinding } from './binding.interface';

@Injectable()
export class BindingService {
    constructor(@InjectModel(Binding.name) private bindingModel: Model<IBinding>) {}

    async create(createBindingDto: CreateBindingDto): Promise<IBinding> {
        const createdBinding = new this.bindingModel(createBindingDto);
        return createdBinding.save();
    }

    async findAll(): Promise<IBinding[]> {
        return this.bindingModel.find().exec();
    }

    async findOne(id: string): Promise<IBinding> {
        const binding = await this.bindingModel.findById(id).exec();
        if (!binding) {
            throw new NotFoundException('Binding not found');
        }
        return binding;
    }

    async update(id: string, updateBindingDto: UpdateBindingDto): Promise<IBinding> {
        const updatedBinding = await this.bindingModel.findByIdAndUpdate(id, updateBindingDto, { new: true }).exec();
        if (!updatedBinding) {
            throw new NotFoundException('Binding not found');
        }
        return updatedBinding;
    }

    async delete(id: string): Promise<IBinding> {
        const deletedBinding = await this.bindingModel.findByIdAndDelete(id).exec();
        if (!deletedBinding) {
            throw new NotFoundException('Binding not found');
        }
        return deletedBinding;
    }

    async addEntity(id: string, entity: { type: string; id: string; description: string; relatedTo?: { type: string; id: string }[] }): Promise<IBinding> {
        const binding : IBinding = await this.findOne(id);
        binding.entities.push(entity);
        return binding.save();
    }

    async removeEntity(id: string, entityId: string): Promise<IBinding> {
        const binding : IBinding = await this.findOne(id);
        binding.entities = binding.entities.filter(entity => entity.id !== entityId);
        return binding.save();
    }

    async addRelation(id: string, entityId: string, relation: { type: string; id: string }): Promise<IBinding> {
        const binding :IBinding = await this.findOne(id);
        const entity = binding.entities.find(entity => entity.id === entityId);
        if (!entity) {
            throw new NotFoundException('Entity not found');
        }
        if (!entity.relatedTo) {
            entity.relatedTo = [];
        }
        entity.relatedTo.push(relation);
        return binding.save();
    }

    async removeRelation(id: string, entityId: string, relationId: string): Promise<IBinding> {
        const binding : IBinding = await this.findOne(id);
        const entity = binding.entities.find(entity => entity.id === entityId);
        if (!entity) {
            throw new NotFoundException('Entity not found');
        }
        entity.relatedTo = entity.relatedTo.filter(relation => relation.id !== relationId);
        return binding.save();
    }
}