import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(payload: any): void {
    this.server.emit('message', payload);
  }
}
