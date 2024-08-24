import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import * as process from "process";

const mongoUrl = process.env.DATABASE_URL;

console.log('mongoUrl:', mongoUrl);

@Module({
    imports: [
        MongooseModule.forRoot(mongoUrl),
    ],
    exports: [MongooseModule],
})
export class DatabaseModule {
}