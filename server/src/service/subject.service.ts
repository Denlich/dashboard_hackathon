import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {SubjectEntity} from "../entity/subject.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class SubjectService {
    constructor(@InjectRepository(SubjectEntity) private readonly subjectRepo: Repository<SubjectEntity>) {
    }

    async get(id: number) {
        const subject = await this.subjectRepo.findOne({where: {id}})
        if(!subject) throw new HttpException("Subject not found", HttpStatus.NOT_FOUND)
        return subject
    }

    async getAll() {
        return await this.subjectRepo.find();
    }
}