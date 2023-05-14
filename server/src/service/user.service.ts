import {Injectable} from "@nestjs/common";
import {SignUpDto} from "../dto/user/sign-up.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../entity/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async create(userDto: SignUpDto) {
        return await this.userRepo.save(userDto)
    }

    async getOne(id: number) {
        return await this.userRepo.findOne({where: {id}});

    }

    async getUserByEmail(email: string) {
        return await this.userRepo.findOne({where: {email}});
    }
}
