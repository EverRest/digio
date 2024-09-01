import {
    Controller,
    Get,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {NewsService} from './news.service';
import {JwtAuthGuard} from "../auth/auth.guard";

@Controller('api/news')
export class NewsController {
    constructor(
        private readonly newsService: NewsService,
    ) {
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform: true}))
    async findAll(): Promise<any[]> {
        return await this.newsService.fetchFeeds();
    }
}