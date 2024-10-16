import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

const application = express();
const port = process.env.PORT || 3000;

export class myServer {
    public startServer() {
        application.get('/', (req: Request, res: Response): void => {
            const username = req.query.name as string || 'Anonymous'; 
            const pathFile = path.join(__dirname, 'test.html');

            fs.readFile(pathFile, 'utf8', (readErr, data) => {
                if (readErr) {
                    console.error(readErr);
                    res.status(500).send('Error reading file');
                    return;
                }

                fs.writeFile(path.join(__dirname, 'textarchive.txt'), username, (writeErr) => {
                    if (writeErr) {
                        console.error(writeErr);
                        res.status(500).send('Error writing to file');
                        return;
                    }

                    console.log(`Username received: ${username}`);
                });
            });
        });

        application.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
}

const startEngines = new myServer();
startEngines.startServer();

export default 1;