import { Request, Response } from "express"
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs'); // File System
fs.readFile('./archive/dalva.txt', 'utf8', (err: boolean, data: string): Promise <string> | boolean => {
    if (err) {
        console.log(err);
        return false;
    };

    return new Promise <string> ((response) => {
        setTimeout((): boolean => {
            response('Espera para receber o Carlinhos');
            console.log(data);
            return true;
        }, 3000);
    });

});

export class ourWebsite {
    private websiteRoutes (): void {
        fs.readFile('./archive/dalvapt4.txt', 'utf8', (err: boolean, data: string): boolean => {
            if (err) {
                console.error(err);
                return false;
            }

            console.log(data);
            return true;

        });

        app.get('/', (req: Request, res: Response): void => {
            res.send("Initial program!");
        });

        app.get('/info', (req: Request, res: Response): void => {
            res.send("Informations about the system!");
        });

        app.use((req: Request, res: Response, err: Error): void => {
            if (!err) return;
            res.send(404 || 505); 
        });

    }

    public showInfo (): void {
        this.websiteRoutes();
        app.listen(port, (): void => {
            console.log(`Access our server at http://localhost:${port}`);
        });
    };

}

export default 1;


// O callback do "fs" recebe primeiro o erro e depois a data. A ordem dos fatores é muito importante!