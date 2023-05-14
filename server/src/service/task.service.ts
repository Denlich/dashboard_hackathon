import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TaskEntity} from "../entity/task.entity";
import {CreateTaskDto} from "../dto/task/create-task.dto";
import {TaskDto} from "../dto/task/task.dto";

@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskEntity) private readonly taskRepo: Repository<TaskEntity>) {
    }

    async get(id: number) {
        const task = await this.taskRepo.findOne({where: {id}});
        if (!task) throw new HttpException("Subject not found", HttpStatus.NOT_FOUND);
        return task;
    }

    async getAll() {
        return await this.taskRepo.find();
    }

    async create(taskDto: CreateTaskDto) {
        return await this.taskRepo.save(taskDto);
    }

    async delete(id: number) {
        const taskToRemove = await this.get(id);
        await this.taskRepo.remove(taskToRemove);
        return taskToRemove;
    }

    async update(taskDto: TaskDto) {
        await this.get(taskDto.id);
        await this.taskRepo.save(taskDto);
        return taskDto;
    }
}