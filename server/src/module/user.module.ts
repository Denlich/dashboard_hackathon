import {forwardRef, Module} from "@nestjs/common";
import {UserService} from "../service/user.service";
import {AuthModule} from "./auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../entity/user.entity";


@Module({
  controllers: [],
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => AuthModule),
  ],
  exports: [UserService]
})
export class UserModule {
}
