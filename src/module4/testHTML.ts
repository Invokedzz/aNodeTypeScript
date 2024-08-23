/* import * as fs from 'fs';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const filePath = path.join(__dirname, 'test.html');

app.get('/', (req: Request, res: Response): void => {
    fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string): void => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.header('Content-Type', 'text/html');
        res.send(data);
    });
});

app.listen(port, (): void => {
    console.log(`Server is running at http://localhost:${port}`);
});

*/

console.log(__dirname); // O __dirname pega o local exato da nossa pasta. No caso, './src/module4' e depois é só inserir o arquivo que deseja. Por exemplo: console.log(__dirname, 'test.html');
console.log(__filename);
console.log(__dirname, 'test.html');
