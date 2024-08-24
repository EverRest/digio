import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../db/database.module';
import { AuthModule } from '../auth/auth.module';
import { FileUploadModule } from '../files/file.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        DatabaseModule,
        FileUploadModule,
        MulterModule.register({ dest: './storage' }),
        AuthModule,
    ],
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}