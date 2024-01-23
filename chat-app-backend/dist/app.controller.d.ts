import { AppService } from './app.service';
import { WebsocketGateway } from './websocket.gateway';
export declare class AppController {
    private readonly appService;
    private readonly websocketGateway;
    constructor(appService: AppService, websocketGateway: WebsocketGateway);
    getHello(): string;
    sendMessage(message: string): string;
}
