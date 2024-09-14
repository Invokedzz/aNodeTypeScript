import express from "express";

const app = express();

const port = process.env.PORT || 8443;

import { home, about, error } from "./lovewassuch";

export class server {

    private expressconfig (): void {

        app.use(express.json());

        app.use(express.urlencoded({ extended: true }));

    };

    private serverGET (): void {

        app.get('/', home);

        app.get('/about', about);

        app.get('*', error);

    };

    public listen (): void {

        this.expressconfig();

        this.serverGET();

        app.listen(port, (): void => {

            console.log(`http://localhost:${port}`);

        });

    };

}

const startserver = new server();
startserver.listen();