import { Module, OnModuleInit } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatRepository } from './chatRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from '../entidades/chat.entity';
import { ChatGateway } from './chat.gateway';


@Module({
  imports:[TypeOrmModule.forFeature([ChatEntity])],
  providers: [ChatService,ChatRepository,ChatGateway],
  controllers: [ChatController]
})
export class ChatModule {}
