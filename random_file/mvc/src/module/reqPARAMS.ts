import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

export class loveLoneliness {

    private destroyAll () {
        const otherPath = path.join(__dirname, 'discoverID/discover.html');
        app.get('/:id', (req: Request, res: Response): void => {
            const getID = req.params.id;
            console.log(`Recebemo aqui: ${getID}`);
            res.sendFile(otherPath);
        }); 
    };

    public noDestroy (): void {
        this.destroyAll();
        app.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });
    };

}

const startTHIS = new loveLoneliness();
startTHIS.noDestroy();

export default 1;