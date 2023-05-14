import {IsBoolean, IsNotEmpty, IsNumber, IsString, Min} from "class-validator";


export class TaskDto {

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    id: number


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