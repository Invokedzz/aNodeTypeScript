import { Request, Response } from "express";
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
fs.readFile('./archive/dalvapt2.txt', 'utf8', (err: boolean, data: string): boolean => {
    if (!err) {
        console.log(data);
        return true;
    };

    console.error(err);
    return false;

});

export class firstTest {
    private server (): void {
        app.get('/', (req: Request, res: Response): boolean | void => {
            if (!res) return false;
            res.send('Hello World!');
        });

        app.get('/about', (req: Request, res: Response): void | boolean => {
            if (!res) return false;
            res.send('About World!');
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