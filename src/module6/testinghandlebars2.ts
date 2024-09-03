import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import { home } from "./testinghandlebarsROUTES";
import { about } from "./testinghandlebarsROUTES";
import { addinfo } from "./testinghandlebarsROUTES";
import { addinfoPOST } from "./testinghandlebarsROUTES";

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

export class serverGenerator {

    gatheringExpress (): void {

        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

    };

    private serverGET (): void {

        this.gatheringExpress();
        app.get('/', home)
        app.get('/home.handlebars', home);
        app.get('/about.handlebars', about);
        app.get('/addinfo.handlebars', addinfo);

    };

    private serverPOST (): void {

        app.post('/addinfo/completepost', addinfoPOST);

    };

    public listen (): void {

        this.serverGET();
        this.serverPOST();
        app.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });

    };

}

const gettingStarted = new serverGenerator();
gettingStarted.listen();