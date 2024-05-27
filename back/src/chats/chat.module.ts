import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatRepository } from './chatRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './chat.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ChatEntity])],
  providers: [ChatService],
  controllers: [ChatController],
  exports:[ChatRepository]
})
export class ChatModule {}
