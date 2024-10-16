import path from "path";
import fs from "fs";
import express, { Request, Response } from "express";
// import { error } from "console";
const app = express();
const port = process.env.PORT || 3000;

export class startingHTMLserver {
    serverGates () {
        app.get('/', (req: Request, res: Response): void => {
            const username = req.query.username as string;
            const HTMLpath = path.join(__dirname, 'test.html');
            fs.readFile(HTMLpath, 'utf8', (err, data): void => {
                if (err) {
                    console.error(err);
                    throw new Error("Something went wrong!");
                }

                const pathText = path.join(__dirname, 'textarchive.txt');
                fs.writeFile(pathText, username || '', (writeErr: Error | null): void => {

                    if (writeErr) {
                        console.error(writeErr);
                        return;
                    };

                    console.log(`Username received: ${username}`);
                    res.send(data);

                });

            });
        });
    };

    listen (): void {
        this.serverGates();
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }

};

export class unlinkTextfile {
    doingtheUnlink (): void {
        const pathText = path.join(__dirname, 'textarchive.txt');
        fs.unlink(pathText, (err: Error | null) => {
            
            if (err) {
                console.error(err);
                return;
            };

            console.log('File deleted!');

        });
    };
}

const startserver = new startingHTMLserver();
const deleteFile = new unlinkTextfile();
startserver.listen();
deleteFile.doingtheUnlink();

export default 1;