import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { AuthController } from "../controller/auth.controller";
import { UserModule } from "./user.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "process";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "asdasdasdadsadasdas",
      signOptions:  {
        expiresIn: "24h"
      }
    })
  ],
  exports: [
    AuthService, JwtModule,
  ]
})
export class AuthModule {
}