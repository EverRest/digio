import {Module} from '@nestjs/common';
import {NewsService} from './news.service';
import {AuthModule} from "../auth/auth.module";
import {NewsController} from "./news.controller";

@Module({
    imports: [
        AuthModule,
    ],
    controllers: [NewsController],
    providers: [NewsService],
    exports: [NewsService],
})
export class NewsModule {}
