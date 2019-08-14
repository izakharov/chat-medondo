import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ChatService } from '@shared/services/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from '@shared/model/message';

@Component({
    selector: 'medo-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {
    @Input() currentUser: string;

    openEmojiBar = false;
    users = [];
    messages: Message[] = [];
    showChat = false;
    newMessageForm: FormGroup;

    constructor(private chatService: ChatService, private formBuilder: FormBuilder) {
        this.chatService.onMessage().subscribe(this.onChatMessage);
        this.chatService.onNewUser().subscribe(this.onNewUser);
    }

    ngOnInit() {
        this.newMessageForm = this.formBuilder.group({
            text: ['', Validators.required]
        });
    }

    sendMessage() {
        const newMessage = new Message(this.newMessageForm.value.text, this.currentUser);
        this.chatService.send(newMessage);
        this.newMessageForm.reset();
    }

    direct(name) {
        const textControl = this.newMessageForm.get('text');
        textControl.setValue(`@${name}`);
    }

    addEmoji(event: any) {
        const textControl = this.newMessageForm.get('text');
        textControl.setValue(`${this.newMessageForm.value.text}${event.emoji.native}`);
        this.openEmojiBar = false;
    }

    private onChatMessage = (data: Message) => {
        this.messages.push(data);
        this.addOlderUser(data.userName);

    }

    private onNewUser = (user: any) => {
        if (user === this.currentUser) {
            this.users.unshift(user);
        }
        else {
            this.users.push(user);
        }
    }

    private addOlderUser(name) {
        if (this.users.indexOf(name) == -1) {
            this.users.push(name);
        }
    }
}
