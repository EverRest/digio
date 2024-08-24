import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtHelper {
    constructor(private readonly jwtService: JwtService) {}

    decodeToken(authHeader: string): { userId: string } {
        if (!authHeader) {
            throw new UnauthorizedException('Authorization header is missing');
        }
        const token = authHeader.split(' ')[1];
        const decoded = this.jwtService.decode(token) as { userId: string };
        if (!decoded || !decoded.userId) {
            throw new UnauthorizedException('Invalid token');
        }
        return { userId: decoded.userId };
    }
}
