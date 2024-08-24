import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BindingService } from './binding.service';
import { BindingController } from './binding.controller';
import { BindingSchema } from './binding.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Binding', schema: BindingSchema }])],
    controllers: [BindingController],
    providers: [BindingService]
})
export class BindingModule {}