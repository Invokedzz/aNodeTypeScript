const express = require('express');
import { Request, Response } from "express";
const app = express();
//const wires = require('./programAassist');
const port = process.env.PORT || 3000;

export class startWebsite {
    private startEngine (): void {

        app.get('/', (req: Request, res: Response): void => {
            res.send('Main page!');
        });

        app.get('/about', (req: Request, res: Response): void => {
            res.send('About page!');
        });

        app.use((req: Request, res: Response, err: Error): void => {
            if (err) {
                res.send(404);
                console.error(err);
            };

            return;

        });

    }

    private receiveFileresponse (): void {
        const fs = require('fs');
        fs.readFile('./archive/dalvapt3.txt', 'utf8', (err: boolean, data: string): boolean => {
            if (err) {
                console.error(err);
                return false;
            };

            console.log(data);
            return true;
        });
    }

    public accessWebsite (): void {
        this.startEngine();
        this.receiveFileresponse();
        app.listen(port, (): void => {
            console.log(`Access our server at http://localhost:${port}`);
        });
    }

}

const callClass = new startWebsite();
callClass.accessWebsite();

export default 1;