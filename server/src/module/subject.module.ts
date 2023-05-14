import {Module} from "@nestjs/common";
import {TaskController} from "../controller/task.controller";
import {TaskService} from "../service/task.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaskEntity} from "../entity/task.entity";
import {SubjectService} from "../service/subject.service";
import {SubjectEntity} from "../entity/subject.entity";
import {SubjectController} from "../controller/subject.controller";
import {AuthModule} from "./auth.module";

@Module({
    controllers: [SubjectController],
    providers: [SubjectService],
    imports: [
        TypeOrmModule.forFeature([SubjectEntity]),
        AuthModule
    ],
    exports: [SubjectService]
})
export class SubjectModule{}