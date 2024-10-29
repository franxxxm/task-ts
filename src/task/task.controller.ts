import { Body, Controller, Post, Get, Param, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Post()
    create(@Body() task:TaskDto){
        this.taskService.create(task)
    }

    @Get(`/:id`)
    findById(@Param('id') id:string): TaskDto{
        return this.taskService.findById(id)
    }

    @Get()
    findAll(@Query() params: FindAllParameters): TaskDto[]{
        return this.taskService.findAll(params)
    }

    @Put('/:id')
    update(@Param('id') id:string, @Body() task:TaskDto){
        this.taskService.update(id, task)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
         this.taskService.delete(id)
    }
}