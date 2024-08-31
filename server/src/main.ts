import * as dotenv from 'dotenv';
dotenv.config();

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {useContainer} from "class-validator";
import * as process from "process";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.useGlobalPipes(new ValidationPipe());
    useContainer(app.select(AppModule), { fallback: true, fallbackOnErrors: true });
    await app.listen(process.env.PORT || 4000);
}

bootstrap().then(r => console.log('Server is running!'));
