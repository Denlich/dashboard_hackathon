import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {OmitType} from "@nestjs/mapped-types";
import {TaskDto} from "./task.dto";

export class CreateTaskDto extends OmitType(TaskDto, ["id"] as const) {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    deadline: string;

    @IsNotEmpty()
    @IsNumber()
    points: number;

    @IsNotEmpty()
    @IsBoolean()
    isChecked: boolean;
}