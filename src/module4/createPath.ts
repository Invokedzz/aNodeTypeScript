import express, { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

const application = express();
const port = process.env.PORT || 3000;

export class startServer {

    private async fileTest (filePath: string): Promise <void> {
        try {

            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) console.log(`${filePath} is a directory`);

        } catch (e) {
            console.error(`Failed to start the server, ${e}`);
        }
    }

    private async serverInit (): Promise <void> {
        const pathInfo = path.join(__dirname, 'templates/index.html');
        await this.fileTest(pathInfo);
        application.get('/', (req: Request, res: Response): void => {

            res.sendFile(`${pathInfo}`);

        });
    }
    
    public async displayServer (): Promise <void> {

        try {

            await this.serverInit();
            application.listen(port, (): void => {
                console.log(`Our server is at: http://localhost:${port}`);
            });

        } catch (error) {
            console.error(`A ${error} happened!`);
            throw new Error ("Something went wrong");
        };

    }

}

const gatherInfo = new startServer();
gatherInfo.displayServer();

