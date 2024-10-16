import express, { Request, Response } from "express";
import { homePage } from "./routes";
import { aboutPage } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

export class serverStart {

    private serverRoutes (): void {
        app.get('/', homePage);
        app.get('/about', aboutPage);
    }

    public listenVoid (): void {
        this.serverRoutes();
        app.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });
    };
}

const start = new serverStart();
start.listenVoid();