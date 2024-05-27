import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './User.Repository';
import { UserEntity } from './user.Entity';
import { VolunteerEntity } from './volunteers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,VolunteerEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserRepository]
})
export class UsersModule {}
