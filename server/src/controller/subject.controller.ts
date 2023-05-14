import {Controller, Get, Param, UseGuards} from '@nestjs/common';
import {SubjectService} from "../service/subject.service";
import {AuthGuard} from "../guard/auth.guard";

@Controller("subjects")
@UseGuards(AuthGuard)
export class SubjectController{
    constructor(private readonly subjectService: SubjectService) {
    }
    @Get("/:id")
    get(@Param("id") id: number) {
        return this.subjectService.get(id);
    }

    @Get("")
    getAll(){
        return this.subjectService.getAll();
    }
}