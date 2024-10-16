import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
const port = process.env.PORT || 3000;
const application = express();

export class startourServer {

    private obtainRoutes (): void {
        application.get('/', (req: Request, res: Response): void => {
            const pathInfo = path.join(__dirname, 'test.html');
            fs.readFile(pathInfo, 'utf8', (err: Error | null, data: string): void => {
                if (err) {
                    console.error(err);
                    throw new Error("Something went wrong");
                }

                const username = req.query.username;
                res.send(data);
                if (username !== undefined) console.log(username);

            });
        });
    };

    public startEverything (): void {
        this.obtainRoutes();
        application.listen(port, (): void => {
            console.log(`Our server is at: http://localhost:${port}`);
        });
    };

}

const classServer = new startourServer();
classServer.startEverything();

export default 1;