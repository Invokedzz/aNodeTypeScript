import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

const app = express();
const gate = process.env.PORT || 3000;

export class smallServer {

    private serverInit () {
        
        app.get('/', (req: Request, res: Response): void => {

        });

        app.get('/extends', (req: Request, res: Response): void => {

        });

    }

    public listen (): void {
        this.serverInit();
        app.listen(gate, (): void => {
            console.log(`Access http://localhost:${gate}`);
        });
    };
}

export default 1;