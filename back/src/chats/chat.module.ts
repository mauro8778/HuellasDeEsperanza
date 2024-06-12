import { Module, OnModuleInit } from '@nestjs/common';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat.gateway';
import { MessageEntity } from 'src/entidades/message.entity';
import { UserEntity } from 'src/entidades/user.entity';


@Module({
  providers: [ChatService,ChatGateway]
})
export class ChatModule {}
