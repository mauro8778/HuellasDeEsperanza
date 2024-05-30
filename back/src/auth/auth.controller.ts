import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { LoginDto } from 'src/dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor(private readonly authservices:AuthService ){}

@Post('register')
async Register(@Body() register: CreateUserDto){
    return await this.authservices.Register(register)
}

@Post('login')
async Login(@Body() credential:LoginDto){
    return await this.authservices.Login(credential)
}

@Post('logout')
async Logout (@Body()credential : LoginDto){
    return await this.authservices.Logout(credential)
}

}

