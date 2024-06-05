import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatRepository } from './chatRepository';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

  constructor(private readonly chatRepository : ChatRepository){}

  @WebSocketServer()
  server: Server;

  private usuariosLogueados = new Set('string');

  private logger: Logger = new Logger('ChatGateway');

  afterInit(server: Server) {
    this.logger.log('WebSocket server inicializado');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliente desconectado: ${client.id}`);
    this.usuariosLogueados.delete(client.id)
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Cliente conectado: ${client.id}`);

    
    if(!client.recovered){
      const messages = await this.chatRepository.getMessageByDate(client.handshake.auth.server)

      messages.forEach(message => {
        this.server.emit('msgToCommunity', message.content, message.createdAt)
      })
    }
    
  }


  @SubscribeMessage('msgToCommunity')
  async handleMessageCommunity(@ConnectedSocket() client: Socket, @MessageBody() data: string) {
    const message = await this.chatRepository.newMessage(data)  
    client.broadcast.emit('msgToCommunity',data, message.createdAt); 

  }



}
 