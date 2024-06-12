import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';


@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnModuleInit {

  @WebSocketServer()
  public server: Server; 

  constructor(private readonly chatService: ChatService) {}

  onModuleInit() {
    this.server.on('connection', (socket: Socket) => {

      const {name, token} = socket.handshake.auth
      
      if (!name) {
        socket.disconnect()
        return
      }
      console.log('Cliente conectado: ', name, token);
      

      this.chatService.onClientConnected({id: socket.id, name: name});


      // socket.emit('welcome-message', 'Bienvenido al servidor')

      this.server.emit('on-clients-changed', this.chatService.getClients() )

      
      socket.on('disconnect', () => {
      
      this.chatService.onClientDisconnected(socket.id)  
      
      })
    })
  }

  // handleConnection(client: Socket) {
  //   console.log('Cliente conectado:', client.id);
  // }

  // handleDisconnect(client: Socket) {
  //   console.log('Cliente desconectado:', client.id);
  // }
}
