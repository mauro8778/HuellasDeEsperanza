import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserEntity } from 'src/entidades/user.entity';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){}

  async Login(email: string, password: string) {
    try {
      const response = await axios.post(
        `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
        {
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          audience: process.env.AUTH0_MGMT_API_AUDIENCE,
          grant_type: 'password',
          username: email,
          password: password,
        },
      );

      const token = response.data.access_token;

      return { succes: 'Usuario logueado correctamente', token };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async Register(
    email: string,
    password: string,
    userData: Partial<UserEntity>,
    accessToken,
  ) {
    try {
      await axios.post(
        `${process.env.AUTH0_MGMT_API_URL}users`,
        {
          email,
          password,
          connection: 'Username-Password-Authentication',
          user_metadata: userData,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      await this.userRepository.save(userData)
      return { succes: "Usuario registrado correctamente" }
    } catch (error) {
      throw new BadRequestException('Error creating user');
    }
  }

  async Logout(credential: any) {
    return { message: 'Usuario deslogueado correctamente' };
  }
}
