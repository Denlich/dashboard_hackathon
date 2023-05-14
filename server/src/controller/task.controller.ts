import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe} from "@nestjs/common";
import {TaskService} from "../service/task.service";
import {CreateTaskDto} from "../dto/task/create-task.dto";
import {TaskDto} from "../dto/task/task.dto";
import {AuthGuard} from "../guard/auth.guard";

@Controller("tasks")
@UseGuards(AuthGuard)
export class TaskController {

    constructor(private readonly taskService: TaskService) {
    }

    @Get(":id")
    get(@Param("id") id: number) {
        return this.taskService.get(id);
    }

    @Get()
    getAll() {
        return this.taskService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() taskDto: CreateTaskDto) {
        return this.taskService.create(taskDto);
    }

    @Delete(":id")
    delete(@Param() id: number) {
        return this.taskService.delete(id);
    }

    @Put()
    @UsePipes(ValidationPipe)
    update(@Body() taskDto: TaskDto) {
        return this.taskService.update(taskDto);
    }
}