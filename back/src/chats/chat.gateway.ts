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

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
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

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Cliente conectado: ${client.id}`);
    this.usuariosLogueados.add(client.id)

  }


  @SubscribeMessage('msgToCommunity')
  handleMessageCommunity(@ConnectedSocket() client: Socket, @MessageBody() data: string): void {
    this.usuariosLogueados.forEach((usuario) => {
      client.broadcast.to(usuario).emit('msgToCommunity',data);
    })
     
  }

}
 