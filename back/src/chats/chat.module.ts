import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatRepository } from './chatRepository';

@Module({
  providers: [ChatService],
  controllers: [ChatController],
  exports:[ChatRepository]
})
export class ChatModule {}
