import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse, ConnectedSocket, OnGatewayDisconnect, OnGatewayConnection, OnGatewayInit } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server: Server;

    afterInit(server: Server) {
        console.log('WebSocket server inicializado');
      }
    
      handleDisconnect(user: Socket) {
        console.log(`Usuario desconectado: ${user.id}`);
      }
    
      handleConnection(user: Socket, ...args: any[]) {
        console.log(`Usuario conectado: ${user.id}`);
      }
  
    @SubscribeMessage('message')
    handlePrivateMessage(
      @MessageBody() message: { sender: string, recipient: string, text: string },
      @ConnectedSocket() client: Socket,
    ): void {

      const recipientSocketId = this.server.sockets.adapter.rooms.get(message.recipient);

      if (recipientSocketId) {
        client.to(recipientSocketId).emit('message', message);
      }
    }
  }
  