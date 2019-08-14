import { Component } from '@angular/core';
import { ChatService } from '../shared/services/chat.service';

@Component({
    selector: 'medo-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    showChat = false;
    currentUser: string;

    constructor(private chatService: ChatService) {
        this.chatService.init();
    }

    onUserSignIn(user: string) {
        this.currentUser = user;
        this.showChat = true;
    }
}
