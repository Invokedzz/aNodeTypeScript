import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import { homepage } from "./mooray";
import { aboutpage } from "./mooray";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.engine('handlebars', engine ({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '../views/partials'),
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

app.get('/', homepage);
app.get('/about', aboutpage);

app.listen(port, (): void => {
    console.log(`http://localhost:${port}`);
});