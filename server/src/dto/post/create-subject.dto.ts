import {IsNotEmpty, IsNumber, IsString, Min} from "class-validator";


export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    desc: string

    @IsNumber()
    @Min(0)
    points: number
}