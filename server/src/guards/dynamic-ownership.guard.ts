import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Model } from 'mongoose';

@Injectable()
export class DynamicOwnershipGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new ForbiddenException('Authorization header is missing');
        }
        const token = authHeader.split(' ')[1];
        const decodedToken = this.jwtService.decode(token) as { userId: string };
        if (!decodedToken || !decodedToken.userId) {
            throw new ForbiddenException('Invalid token');
        }
        const model : Model<any> = this.reflector.get<Model<any>>('model', context.getHandler());
        if (!model) {
            return true;
        }
        const resourceId = request.params.id;
        if (resourceId) {
            const resource = await model.findOne({ _id: resourceId }).exec();
            if (!resource) {
                throw new ForbiddenException('Resource not found');
            }
            if (resource.userId !== decodedToken.userId) {
                throw new ForbiddenException('You do not have permission to access this resource');
            }
        }
        request.user = decodedToken;

        return true;
    }
}