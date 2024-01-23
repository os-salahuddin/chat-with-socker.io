import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { WebsocketGateway } from './websocket.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly websocketGateway: WebsocketGateway,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/send-message/:message')
  sendMessage(@Param('message') message: string): string {
    this.websocketGateway.handleMessage(message);
    return `Message ${message} sent to web socket client`;
  }
}
