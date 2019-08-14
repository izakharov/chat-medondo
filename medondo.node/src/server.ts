import app from './app';
import { createServer } from "http";
import { Chat } from './chat/chat';

const server = createServer(app);

server.listen(app.get("port"), () => {
    console.log(
        "  Chat medondo server is running at http://localhost:%d in the %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

const chat = new Chat(server);
chat.start();