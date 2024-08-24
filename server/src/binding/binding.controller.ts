import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    NotFoundException
} from '@nestjs/common';
import { BindingService } from './binding.service';
import { CreateBindingDto } from './create-binding.dto';
import { UpdateBindingDto } from './update-binding.dto';
import {IBinding} from "./binding.interface";

@Controller('binding')
export class BindingController {
    constructor(private readonly bindingService: BindingService) {}

    @Post()
    async create(@Body() createBindingDto: CreateBindingDto):Promise<IBinding> {
        return this.bindingService.create(createBindingDto);
    }

    @Get()
    async findAll() : Promise<IBinding[]> {
        return this.bindingService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) : Promise<IBinding> {
        return this.bindingService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBindingDto: UpdateBindingDto) : Promise<IBinding> {
        return this.bindingService.update(id, updateBindingDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) : Promise<IBinding> {
        return this.bindingService.delete(id);
    }

    @Post(':id/entities')
    async addEntity(@Param('id') id: string, @Body() entity: { type: string; id: string; description: string }): Promise<IBinding> {
        return this.bindingService.addEntity(id, entity);
    }

    @Delete(':id/entities/:entityId')
    async removeEntity(@Param('id') id: string, @Param('entityId') entityId: string) : Promise<IBinding> {
        return this.bindingService.removeEntity(id, entityId);
    }
}