import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: String) {
        const user = await this.userService.findOneByEmail(email);
        if (user && password === user.password) {
            const { password, ...result } = user;
            return { 'msg': 'Authorized' , "Status code": HttpStatus.ACCEPTED , result};
        }
        return null;
    }

    async login(user: User) {
        const payload = {
            username: user.email,
            sub: {
                name: user.name,
            },
        };

        return {
            ...user,
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
        };
    }

    async refreshToken(user: User) {
        const payload = {
            username: user.email,
            sub: {
                name: user.name,
            },
        };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
