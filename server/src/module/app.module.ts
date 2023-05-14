import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {UserModule} from './user.module';
import * as process from "process";
import {AuthModule} from "./auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import { dataSourceOptions } from "../typeOrm.config";
import {SubjectModule} from "./subject.module";
import {TaskModule} from "./task.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        UserModule,
        AuthModule,
        SubjectModule,
        TaskModule
    ],

})
export class AppModule {
}