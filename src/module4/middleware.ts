import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

export class verifyServerValidation {

    private serverValidator (req: Request, res: Response, next: NextFunction): void {
    
        const authenticator = req.headers['authorization'];
        if (authenticator !== '1234') res.send("Not authorized");
        next();

    }

    private serverInit (): void {
        app.use('/protected', this.serverValidator);
        app.get('/protected/area', (req: Request, res: Response): void => {
            res.send("This is a protected info!");
        });

        const pathInfo = path.join(__dirname, 'templates/index.html');
        app.get('/', (req: Request, res: Response): void => {
            res.sendFile(`${pathInfo}`); 
        });

    };

    public listen (): void {
        this.serverInit();
        app.listen(port, (): void => {
            console.log(`Our server is at: http://localhost:${port}`);
        });
    }

}

const initAll = new verifyServerValidation();
initAll.listen();

export default 1;