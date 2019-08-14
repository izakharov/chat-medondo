import { Server } from "http";
import * as socketIo from 'socket.io';
import { Message } from "./message";

export class Chat {
    private socketIO: SocketIO.Server;

    constructor(server: Server) {
        this.socketIO = socketIo(server);
    }

    public start(): void {
        this.socketIO.on('connect', (socket: any) => {
            console.log('New medondo user has joined');

            socket.on('message', (m: Message) => {
                this.socketIO.emit('message', m);
            });

            socket.on('new-user', (userName: string) => {
                this.socketIO.emit('new-user', userName);
            });

            socket.on('disconnect', (data: any, erorr: any) => {
                // Faced with the issue how to handle user and discovered that
                // If we want to handle which user has been disconnected,
                // to update other user with his upsence,
                // we can use middlware i.e. socket.io.users
                console.log('Medondo user has left the party');
            });
        });
    }
}