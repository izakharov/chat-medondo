import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { ChatService } from './services/chat.service';

import { HighlightDirectUserDirective } from './pipes/highlight-direct-user.directive';

@NgModule({
    declarations: [
        HighlightDirectUserDirective
    ],
    imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        PickerModule
    ],
    providers: [ChatService],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        PickerModule,
        
        HighlightDirectUserDirective
    ]
})
export class SharedModule { }
