
import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

const MEDONDO_URL = 'http://localhost:6565';

@Injectable()
export class ChatService {
    private socket;

    public init(): void {
        this.socket = socketIo(MEDONDO_URL);
    }

    public send(message: Message): void {
        this.socket.emit('message', message);
    }

    public addUser(userName: string) {
        this.socket.emit('new-user', userName);
    }

    public onMessage(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('message', (data: any) => observer.next(data));
        });
    }

    public onNewUser(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('new-user', (data: any) => observer.next(data));
        });
    }
}