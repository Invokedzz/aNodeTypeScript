import express, { Request, Response } from "express";
import { URL } from 'url';

export class ConsTROYURL {
    constructor(
        private url: string,
        private serverGateway: number
    ) {}

    private getRoutes(app: express.Express): void {
        app.get('/', (req: Request, res: Response): void => {
            res.status(this.serverGateway);

            try {
                const someURL = new URL(this.url);
                res.send(someURL.toString()); 
            } catch (error) {
                res.status(500).send("Invalid URL");
            }
        });
    }

    public startYourEngines(): void {
        const app = express();
        this.getRoutes(app);

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Our server is at: http://localhost:${port}`);
        });
    }
}

const startClass = new ConsTROYURL('http://localhost:3000', 200);
startClass.startYourEngines();
