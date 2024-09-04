import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import { homepage } from "./mooray";

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine ({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.get('/', homepage);

app.listen(port, (): void => {
    console.log(`http://localhost:${port}`);
});