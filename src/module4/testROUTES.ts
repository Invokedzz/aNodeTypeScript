import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
    const file = path.join(__dirname, 'test.html');
    if (!file) return;
    fs.readFile(file, 'utf8', (err: Error | null, data: string): void => {
        if (err) {
            console.error(err);
            return;
        };

        res.send(data);

    });
});

app.get('/test2.html', (req: Request, res: Response): void => {
    const fileCarlinhos = path.join(__dirname, 'test2.html');
    fs.readFile(fileCarlinhos, 'utf8', (err: Error | null, data: string): void => {
        if (err) {
            console.error(err);
            throw new Error ("something went wrong");
        };

        res.send(data);

    });
});

app.listen(port, function (): void {
    console.log(`Our server is at: http://localhost:${port}`);
});