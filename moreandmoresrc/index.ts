import express from "express";

import { principal } from "./routesindex";

import { aboutwebsite } from "./routesindex";

import { errorpage } from "./routesindex";

const app = express();

const port = process.env.PORT || 3000;

export class initializeWebsite {

    private callRoutes (): void {

        app.get('/', principal);
        app.get('/about', aboutwebsite);

    };

    private callErrors (): void {

        app.use(errorpage);

    };

    public listen (): void {

        this.callRoutes();
        this.callErrors();

        app.listen(port, (): void => {
            console.log(`access http://localhost:${port}`);
        });

    };

};

const websiteStarted = new initializeWebsite();
websiteStarted.listen();

