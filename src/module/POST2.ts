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

        const auth = req.headers['authorization'];
        if (auth !== 'pcsiqueiraALIVE') {
            res.send("He is NOT alive. REVIVE HIMkkkkkkkkk.");
            return;
        };

        next();

    }

    private serverInit (): void {

        this.adjustExpress();
        
        app.use('/restrictpage.html', this.validateEntrance);

        const pathHome = path.join(__dirname, 'discoverID/homepage.html');
        const pathAbout = path.join(__dirname, 'discoverID/aboutpage.html');
        const pathRestrict = path.join(__dirname, 'discoverID/restrictpage.html');

        app.get('/', (req: Request, res: Response): void => {
            res.sendFile(pathHome);
        });

        app.get('/homepage.html', (req: Request, res: Response): void => {
            res.sendFile(pathHome);
        });

        app.get('/aboutpage.html', (req: Request, res: Response): void => {
            res.sendFile(pathAbout);
        });

        app.get('/restrictpage.html', (req: Request, res: Response): void => {
            res.sendFile(pathRestrict);
        });

        app.post('/homepage.html/sendinformation', (req: Request, res: Response): void => {
            
            const user = req.body.user;
            const username = req.body.username;
            const password = req.body.password;

            if (!user && !username) {
                res.send(`Envia as informações direito inseto !!`);
                return;
            };

            if (!password && password.value <= 5) {
                res.send(`Maior ou igual a cinco caracteres burro`);
                return;
            };

            res.send(`We received: ${user}, ${username} and ${password}`);

        });

        app.post('/aboutpage.html/sendinfo', (req: Request, res: Response): void => {
            
            const info = req.body.info;
            
            if (!info && info.length <= 0) {
                res.send(`Cê não mando nada né misera`);
                return;
            };

            console.log(`The user sent: ${info}`);
            res.send(`Your info was sent to the system. Thanks!`);

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