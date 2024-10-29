import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService){}


    @Post()
    create(@Body() users: UserDto){
        return this.UsersService.create(users)
    }

}
