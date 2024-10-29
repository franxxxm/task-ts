import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
    private jwtEpirationTimeSeconds: number

    constructor(private readonly usersService:UsersService, private readonly jwtService: JwtService, private readonly configService: ConfigService){
        this.jwtEpirationTimeSeconds = configService.get<number>('JWT_EXPIRATION_TIME')
    }

    singIn(name:string, password:string): AuthDto{
        const foundUser = this.usersService.findUserByName(name)

        if(!foundUser || !bcryptCompareSync(password, foundUser.password)){
            throw new UnauthorizedException()
        }

        const payload = {sub: foundUser.id, name:foundUser.name}
        const token = this.jwtService.sign(payload)

        return {token, expireIn: this.jwtEpirationTimeSeconds}
    }
}
