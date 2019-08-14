import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlightDirectUser' })

export class HighlightDirectUserDirective implements PipeTransform {

    transform(value: any, args: any): any {
        const re = new RegExp(/^@[a-zA-Z]*\b/, 'gi');
        const match = value.match(re);
        
        if (!match)
            return value;

        return value.replace(re, "<span class='direct-user'>" + match[0] + ", </span>");
    }
}
