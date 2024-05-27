import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authservices:AuthService ){}

@Post('register')
async Register(){}

@Post('login')
async Login(){}

@Post('logout')
async Logout (){}

}

