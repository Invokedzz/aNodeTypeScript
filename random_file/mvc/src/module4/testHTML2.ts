import fs from "fs";
import express, { Request, Response } from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;

export class HTMLserver {
    public startServer (): void {
        app.get('/', (req: Request, res: Response): void => {
            const obtainPath = path.join(__dirname, 'test.html');
            fs.readFile(obtainPath, 'utf8', (err: Error | null, data: string): void => {
                if (err) {
                    console.error(err);
                    return undefined;
                };
    
               res.send(data); 
    
            });
        });
    };

    public turnON (): void {
        this.startServer();
        app.listen(port, (): void => {
            console.log(`Our server is at: http://localhost:${port}`);
        });
    };

}

const initClass = new HTMLserver();
initClass.turnON();
export default 1;