import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './User.Repository';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports:[UserRepository]
})
export class UsersModule {}
