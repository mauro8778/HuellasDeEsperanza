import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entidades/user.entity';
import { Auth0Module } from 'src/auth0/auth0.module';
import { Auth0Guard } from 'src/guards/auth0.guard';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]), Auth0Module],
  providers: [AuthService, Auth0Guard],
  controllers: [AuthController]
})
export class AuthModule {}
