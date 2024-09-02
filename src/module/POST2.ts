import express, { Request, Response } from "express";
import path from "path";
import { NextFunction } from "express";

const app = express();
const port = process.env.PORT || 3000;

export class wholeServer {
    
    private adjustExpress (): void {

        app.use(express.urlencoded({extended: true}));
        app.use(express.json());

    }

    private validateEntrance (req: Request, res: Response, next: NextFunction): void {

    }

    private serverInit (): void {

        this.adjustExpress();

        const pathHome = path.join(__dirname, 'discoverID/homepage.html');
        const pathAbout = path.join(__dirname, 'discoverID/aboutpage.html');
        const pathRestrict = path.join(__dirname, 'discoverID/restrictpage.html');

        app.get('/', (req: Request, res: Response): void => {
            res.sendFile(pathHome);
        });

        app.get('/aboutpage.html', (req: Request, res: Response): void => {
            res.sendFile(pathAbout);
        });

        app.get('/restrictpage.html', (req: Request, res: Response): void => {
            res.sendFile(pathRestrict);
        });

    }
    
    public listen (): void {
        
        this.serverInit();

        app.listen(port, (): void => {
            console.log(`Access http://localhost:${port}`);
        });

    };
}

const startServer = new wholeServer();
startServer.listen();

export default 1;