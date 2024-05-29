import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entidades/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService,AuthRepository],
  controllers: [AuthController]
})
export class AuthModule {}
