import express, { Request, Response } from "express";
import { NextFunction } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

export class smallApp {

    private fileValidator (req: Request, res: Response, next: NextFunction): void {

        const auth = req.headers['authorization'];
        if (auth !== '1234') {

            res.send("Go away, dummy.");
            return;

        };

        next();

    }

    private serverRoutes(): void {

        const gatherHomePath = path.join(__dirname, '/smallAplication/homepage.html');
        const gatherAboutPath = path.join(__dirname, '/smallAplication/aboutpage.html');

        app.get('/', (req: Request, res: Response): void => {
            res.sendFile(gatherHomePath);
        });

        app.get('/aboutpage.html', (req: Request, res: Response): void => {
            res.sendFile(gatherAboutPath);
        });
    }

    private restrictedRoutes (): void {
        app.use('/restrictPage.html', this.fileValidator);
        const restrictPath = path.join(__dirname, '/smallAplication/restrictPage.html');
        app.get('restrictPage.html', (req: Request, res: Response): void => {
            res.sendFile(restrictPath);
        });

    }

    public listen (): void {
        this.serverRoutes();
        this.restrictedRoutes();
        app.listen(port, (): void => {
            console.log(`Access http://localhost:${port}`);
        });
    };

}

const startServer = new smallApp();
startServer.listen();

export default 1;