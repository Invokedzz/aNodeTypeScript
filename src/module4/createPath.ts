import express, { Request, Response } from "express";
import path from "path";

const application = express();
const port = process.env.PORT || 3000;

export class startServer {

    private serverInit (): void {

        application.get('/', (req: Request, res: Response): void => {

            const gatheringPath = path.join(__dirname, 'templates/index.html');
            res.sendFile(`${gatheringPath}`);
        
            // O send manda somente as mensagens. O "sendFile" pode renderizar o arquivo.
        
        
        });
    }
    
    public displayServer (): void {

        application.listen(port, (): void => {
            this.serverInit();
            console.log(`Server running at http://localhost:${port}`);
        });

    }

}

const gatherInfo = new startServer();
gatherInfo.displayServer();