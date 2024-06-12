import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';


@WebSocketGateway(81,{
  cors: {origin: '*'}
})
export class ChatGateway implements OnModuleInit {

  
  @WebSocketServer()
  public server: Server;

  constructor(private readonly chatService : ChatService){}


  onModuleInit() {

  }

}
