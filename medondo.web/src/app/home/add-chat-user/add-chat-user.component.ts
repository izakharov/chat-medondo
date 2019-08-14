import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'medo-add-chat-user',
    templateUrl: './add-chat-user.component.html',
    styleUrls: ['./add-chat-user.component.scss']
})
export class AddChatUserComponent implements OnInit {
    @Output() onUserAdded = new EventEmitter<string>();
    newUserForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private chatService: ChatService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.newUserForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    addUser() {
        if (!this.newUserForm.valid) {
            this.showMessage();
        } else {
            this.chatService.addUser(this.newUserForm.value.name);
            this.onUserAdded.next(this.newUserForm.value.name);
            this.newUserForm.reset();
        }

    }

    private showMessage() {
        this.snackBar.open('Please, provide your name, if you want to start chatting with us :)', '', {
            duration: 3000,
            // here specify the position
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }
}
