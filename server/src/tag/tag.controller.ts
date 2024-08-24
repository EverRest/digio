import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {TagService} from './tag.service';
import {CreateTagDto, UpdateTagDto} from './tag.dto';
import {JwtAuthGuard} from "../auth/auth.guard";

@Controller('tags')
export class TagController {
    constructor(private readonly tagService: TagService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() createTagDto: CreateTagDto) {
        return this.tagService.create(createTagDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll() {
        return this.tagService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async findOne(@Param('id') id: string) {
        return this.tagService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
        return this.tagService.update(id, updateTagDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string) {
        return this.tagService.delete(id);
    }
}
