import { Server } from 'socket.io';
export declare class WebsocketGateway {
    server: Server;
    handleMessage(payload: any): void;
}
