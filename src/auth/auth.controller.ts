import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    singIn(@Body('name') name:string, @Body('password') password:string ): AuthDto{
        return this.authService.singIn(name, password)
    }
}
