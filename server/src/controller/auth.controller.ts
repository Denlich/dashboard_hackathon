import {Body, Controller, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {AuthService} from "../service/auth.service";
import {SignUpDto} from "../dto/user/sign-up.dto";
import {SignInDto} from "../dto/user/sign-in.dto";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post("signin")
  @UsePipes(ValidationPipe)
  signIn(@Body() userDto: SignInDto) {
    return this.authService.signIn(userDto);
  }

  @Post("signup")
  @UsePipes(ValidationPipe)
  signUp(@Body() userDto: SignUpDto) {
    return this.authService.signUp(userDto);
  }
}