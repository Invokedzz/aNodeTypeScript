import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

export class creation {

    private serverPatterns (): void {

        app.use(express.urlencoded({
            extended: true,
        }));

        app.use(express.json());

    }

    private serverInit(): void {

        this.serverPatterns();

        const obtainPath = path.join(__dirname, 'discoverID/POSTmethod.html');

        app.get('/enter/:id', (req: Request, res: Response): void => {
            const obtainID = req.params.id;
            res.sendFile(obtainPath);
            console.log(`Chegou isso pra gente ${obtainID}`);
        });

        app.post('/enter/savefile', (req: Request, res: Response): void => {
            
            const username = req.body.user;
            const password = req.body.password;

            res.send(`Name: ${username}, Password: ${password}`);

        });

    }

    public listen (): void {
        this.serverInit();
        app.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });

    };

}

const startAll = new creation();
startAll.listen();
export default 1;