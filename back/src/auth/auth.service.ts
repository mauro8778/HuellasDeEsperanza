import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserEntity } from 'src/entidades/user.entity';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShelterEntity } from 'src/entidades/shelter.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(ShelterEntity)
    private shelterRepository: Repository<ShelterEntity>,
  ) {}

  async RegisterUser(
    email: string,
    password: string,
    metadata: Partial<UserEntity>,
    accessToken: string,
  ) {
    return this.Register(email, password, metadata, accessToken, 'user');
  }

  async RegisterShelter(
    email: string,
    password: string,
    metadata: Partial<ShelterEntity>,
    accessToken: string,
  ) {
    return this.Register(email, password, metadata, accessToken, 'shelter');
  }

  async Register(
    email: string,
    password: string,
    metadata: Partial<UserEntity> | Partial<ShelterEntity>,
    accessToken: string,
    type: 'user' | 'shelter',
  ) {
    const existingUser = await this.userRepository.findOneBy({ email });
    const existingShelter = await this.shelterRepository.findOneBy({ email });

    if (existingUser || existingShelter) {
      throw new ConflictException('Este email ya se encuentra asociado a un usuario');
    }

    if (type === 'shelter') {
      const existingShelterDNI = await this.shelterRepository.findOneBy({ dni: (metadata as ShelterEntity).dni });
      if (existingShelterDNI) {
        throw new ConflictException('Este DNI ya se encuentra asociado a un refugio');
      }
    }

    try {
      await axios.post(
        `${process.env.AUTH0_MGMT_API_URL}users`,
        {
          email,
          password,
          connection: 'Username-Password-Authentication',
          user_metadata: metadata,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (type === 'user') {
        await this.userRepository.save({
          ...metadata,
          email,
        } as Partial<UserEntity>);
      } else if (type === 'shelter') {
        await this.shelterRepository.save({
          ...metadata,
          email,
        } as Partial<ShelterEntity>);
      }
      return { succes: 'Usuario registrado correctamente' };
    } catch (error) {
      throw new BadRequestException('Error creating user');
    }
  }

  async Login(email: string, password: string) {

    const existingAccoutUser = await this.userRepository.findOneBy({ email });
    const existingAccountShelter = await this.shelterRepository.findOneBy({ email });

    if (!existingAccoutUser && !existingAccountShelter) {
      throw new ConflictException('Correo inexistente en nuestros registros');
    }

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
}
