import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebsocketGateway } from './websocket.gateway';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
