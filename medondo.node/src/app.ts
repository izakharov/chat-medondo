import * as express from "express";
import * as bodyParser from "body-parser";
import * as lusca from "lusca";

export class App {
    public app: express.Application;

    constructor() {
        this.app = express();

        this.initConfigurations();
        this.initRoutes();
    }

    private initConfigurations() {
        this.app.set("port", process.env.PORT || 6565);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(lusca.xframe("SAMEORIGIN"));
        this.app.use(lusca.xssProtection(true));
    }

    private initRoutes() {
        this.app.get('/health-check', (req: express.Request, res: express.Response, next: express.NextFunction) => res.send('Ok'));
    }
}

export default new App().app;