import express from "express";
import { home } from "./tROUTES";
import { about } from "./tROUTES";
import { restrict } from "./tROUTES";
import { homePOST } from "./tROUTES";
import { aboutPOST } from "./tROUTES";

const app = express();
const port = process.env.PORT || 3000;

export class startRoutesParams {

    private validateMiddlewares (): void {
        
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());

    };

    private gatherRoutes (): void {
        
        this.validateMiddlewares();
        app.get('/', home);
        app.get('/aboutpage.html', about);
        app.get('/restrictpage.html', restrict);

    };

    private postRoutes (): void {

        app.post('/homepage.html/sendinformation', homePOST);
        app.post('/aboutpage.html/sendinfo', aboutPOST);

    };

    public listenServer (): void {

        if (require.main !== module) module.exports = app;

        this.gatherRoutes();
        this.postRoutes();

        app.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });

    };

}

const gettingStarted = new startRoutesParams();
gettingStarted.listenServer();