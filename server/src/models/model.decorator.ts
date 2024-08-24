import { SetMetadata } from '@nestjs/common';

export const Model = (model: any) => SetMetadata('model', model);
