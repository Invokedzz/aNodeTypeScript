import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import { loginpage } from "./routes";
import { postlogin } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine ({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

export class gettingStarted {

    private expressFunctions (): void {

        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

    };

    private serverGETS (): void {

        app.get('/', loginpage);

    };

    private serverPOSTS (): void {

        this.expressFunctions();
        app.post('/loginpostmethod', postlogin);

    };

    public listen (): void {

        this.serverGETS();
        this.serverPOSTS();

        app.listen(port, (): void => {
            console.log(`http://localhost:${port}`);
        });

    };

}

const initializeServer = new gettingStarted();
initializeServer.listen();