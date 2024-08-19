import { Request, Response } from "express";
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

export class firstTest {
    private server (): void {
        app.get('/', (req: Request, res: Response): boolean | void => {
            if (!res) return false;
            res.send('Hello World!');
        });
    }

    public startingServer (): void {
        this.server();
        app.listen(port, (): void => {
            console.log('Access http://localhost:' + port);
        });
    };
}

const newClass = new firstTest();
newClass.startingServer();

export default 1;