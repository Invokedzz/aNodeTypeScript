import express from "express";

import { router } from "./routes";

const application = express();

const port = process.env.PORT || 3001;

export class testingSoftwares {

    private expressSettings (): void {

        application.use(express.json());

        application.use(express.urlencoded({ extended: true }));

    };

    private websiteMiddlewares (): void {

        application.use('/', router);

    };

    public listen (): void {

        this.expressSettings();

        this.websiteMiddlewares();

        application.listen(port, (): void => {

            console.log(`http://localhost:${port}`);

        });

    };

};

const serverStart = new testingSoftwares();

serverStart.listen();