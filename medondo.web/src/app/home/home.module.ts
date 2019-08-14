import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "@shared/shared.module";

import { HomeComponent } from './home.component';

import { AddChatUserComponent } from './add-chat-user/add-chat-user.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
    declarations: [
        HomeComponent,
        AddChatUserComponent,
        ChatComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [HomeComponent]
})
export class ChatModule { }
