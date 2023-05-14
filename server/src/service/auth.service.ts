import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { SignUpDto } from "../dto/user/sign-up.dto";
import {SignInDto} from "../dto/user/sign-in.dto";
import {UserEntity} from "../entity/user.entity";

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {
  }

  async signIn(userDto: SignInDto) {
    const user = await this.validateUser(userDto);
    return this.initToken(user);
  }

  async signUp(userDto: SignUpDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) throw new HttpException("User with such email already exist", HttpStatus.BAD_REQUEST);
    const hashPassword = await bcrypt.hash(userDto.password, 4);
    const user = await this.userService.create({ ...userDto, password: hashPassword });
    return this.initToken(user);
  }

  private async initToken(user: UserEntity) {
    const payload = { id: user.id, email: user.email };
    return {
      token: this.jwtService.sign(payload)
    };
  }

  private async validateUser(userDto: SignInDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) throw new UnauthorizedException({ message: "Uncorrect email" });
    const isPasswordEqual = await bcrypt.compare(userDto.password, user.password);
    if (!isPasswordEqual) throw new UnauthorizedException({ message: "Password is incorrect" });
    return user;
  }

  async parseAuthHeader(authHeader: string) {
    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException("Invalid token error");
    }
    const user = this.jwtService.verify(token);
    await this.userService.getOne(user.id);
    return user

  }
}