import { config } from 'dotenv';
import { DataSourceOptions } from "typeorm";
import {UserEntity} from "./entity/user.entity";
import {SubjectEntity} from "./entity/subject.entity";
import {TaskEntity} from "./entity/task.entity";


config();


export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "vjht",
  database: "nest-typeorm",
  entities: [UserEntity, SubjectEntity, TaskEntity],
  synchronize: true
}
