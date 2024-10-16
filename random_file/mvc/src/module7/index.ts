import express from "express";

import path from "path";

import { engine } from "express-handlebars";

import { homepage } from "./routes";

import { getBooks } from "./routes";

import { getBooksID } from "./routes";

import { sendInfo } from "./routes";

const application = express();
const port = process.env.PORT || 3000;

application.engine("handlebars", engine({
    defaultLayout: "main",
}));

application.set('view engine', 'handlebars');
application.set('views', path.join(__dirname, './views'));

export class server {

    private changeExpress (): void {

        application.use(express.json());

        application.use(express.urlencoded({extended: true}));

    };

    private startGET (): void {

        application.get('/', homepage);

    };

    private startPOST (): void {

        this.changeExpress();
        application.get('/getbooks', getBooks);
        application.get('/getbooks/:id', getBooksID);
        application.post('/insertinfo', sendInfo);

    };

    public listen (): void {

        this.startGET();
        this.startPOST();

        application.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });

    };

}

const start = new server();
start.listen();