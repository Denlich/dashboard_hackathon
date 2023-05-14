import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskController} from "../controller/task.controller";
import {TaskService} from "../service/task.service";
import {TaskEntity} from "../entity/task.entity";
import {AuthModule} from "./auth.module";

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [
        TypeOrmModule.forFeature([TaskEntity]),
        AuthModule
    ],
    exports: [TaskService]
})
export class TaskModule{}