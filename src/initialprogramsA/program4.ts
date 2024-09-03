import express from "express";
import { mainpage } from "./program4ROUTES";
import { sendmainFile } from "./program4ROUTES";
import { enterpage } from "./program4ROUTES";

const app = express();
const port = process.env.PORT || 3000;

export class serverStartagain {

    private initSettings (): void {

        app.use(express.urlencoded({extended: true}));
        app.use(express.json());

    };

    private serverGETmethod (): void {

        app.get('/', mainpage);
        app.get('/entrypage', enterpage);

    };

    private serverPOSTmethod (): void {

        this.initSettings();
        app.post('/movingout', sendmainFile);

    };

    public listen (): void {

        this.serverGETmethod();
        this.serverPOSTmethod();

        app.listen(port, (): void => {
            console.log(`My body is ready: http://localhost:${port}`);
        });
    };

}

const classInstance = new serverStartagain();
classInstance.listen();