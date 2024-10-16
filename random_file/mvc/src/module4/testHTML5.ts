import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

const application = express();
const port = process.env.PORT || 3000;

export class Server {
    startServer(): void {
        application.get('/', (req: Request, res: Response): void => {
            const username = req.query.username as string;
            const filePath = path.join(__dirname, 'test.html');

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error reading file');
                    return;
                }

                const archivePath = path.join(__dirname, 'textarchive.txt');
                fs.writeFile(archivePath, username || '', (writeErr) => {
                    if (writeErr) {
                        console.error(writeErr);
                        res.status(500).send('Error writing to file');
                        return;
                    }
                    
                    if (username) {
                        console.log(`Username received: ${username}`);
                    }
                    
                    res.send(data);
                });
            });
        });
    }

    listen(): void {
        this.startServer();
        application.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
}

const serverInstance = new Server();
serverInstance.listen();

export default 1;