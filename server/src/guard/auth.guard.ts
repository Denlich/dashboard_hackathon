import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "../service/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
      try {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        req.user = await this.authService.parseAuthHeader(authHeader);
        return true;

      } catch (e){
        throw new UnauthorizedException("Invalid token error")
      }
  }


}