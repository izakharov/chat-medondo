export class Message {
    text: string;
    userName: string;
    time: number;

    constructor(_text: string, _userName: string) {
        this.text = _text;
        this.userName = _userName;
        this.time = Date.now();
    }
}