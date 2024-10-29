import { Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';
import {v4 as uuid} from 'uuid'
import { hashSync as bcryptHashSync } from 'bcrypt';
import { isNull } from 'util';


@Injectable()
export class UsersService {

    private readonly users: UserDto[] = []

    create(newUser: UserDto){
        newUser.id = uuid()
        newUser.password = bcryptHashSync(newUser.password, 10)
        this.users.push(newUser)
        console.log(this.users);
    }

    findUserByName(name:string): UserDto | null{ 
        return this.users.find(u => u.name === name)
    }

}
