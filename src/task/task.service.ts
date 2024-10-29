import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';


@Injectable()
export class TaskService {

    private tasks: TaskDto[] = []

    create(task: TaskDto){
        this.tasks.push(task)
        return
    }

    findById(id:string): TaskDto{
        const find = this.tasks.filter(t => t.id === id)
        console.log(find);
        
        if(find.length){
            return find[0]
        }

        throw new HttpException(`O id ${id} não foi encontrado`, HttpStatus.NOT_FOUND)
    }

    findAll(params: FindAllParameters): TaskDto[]{
        return this.tasks.filter(t => {
            var match = true

            if(params.title != undefined && !t.title.includes(params.title)){
                match = false
            }

            if(params.status != undefined && !t.status.includes(params.status)){
                match = false
            }

            return match
        })
    }

    update(id:string, task:TaskDto){
        var find = this.tasks.findIndex(t => t.id === id)
        console.log(find);
        if (find >= 0) {
            this.tasks[find] = task
            return
        }

        throw new HttpException(`O id ${id} não foi encontrado`, HttpStatus.NOT_FOUND)
    }   

    delete(id:string):TaskDto{
        var find = this.tasks.findIndex(t => t.id === id)
        if(find >= 0){
            this.tasks[find] = null
            return
        }

        throw new HttpException(`O id ${id} não foi encontrado`, HttpStatus.NOT_FOUND)
    }
}
