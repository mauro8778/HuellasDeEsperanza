import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserEntity } from 'src/entidades/user.entity';

@Injectable()
export class AuthService {
constructor(private readonly authRepository:AuthRepository){}

async Register(credential:Partial<UserEntity>){
    return await this.authRepository.Register(credential)
}

async Login(credential:Partial<UserEntity>){
    return await this.authRepository.Login(credential)
}

async Logout(credential:Partial<UserEntity>){
    return await this.authRepository.Logout(credential)
}
}
