import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
constructor(private readonly authRepository:AuthRepository){}

async Register(){}

async Login(){}

async Logout(){}
}
