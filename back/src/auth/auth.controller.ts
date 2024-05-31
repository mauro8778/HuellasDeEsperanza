import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { LoginDto } from 'src/dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth0Guard } from '../guards/auth0.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(Auth0Guard)
  @Post('register')
  async Register(@Body() register: CreateUserDto, @Req() req) {
    const accessToken = req.auth0Token;
    const { email, password, confirm_password, ...userData } = register;
    return this.authService.Register(email, password, userData, accessToken);
  }

  @Post('login')
  async Login(@Body() credential: LoginDto) {
    const { email, password } = credential;
    return await this.authService.Login(email, password);
  }

  @Post('logout')
  async Logout(@Body() credential: LoginDto) {
    return await this.authService.Logout(credential);
  }
}
