import express, { Request, Response } from "express";
import { engine } from "express-handlebars";
import path from "path"

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({
    defaultLayout: 'main', // Se você estiver usando um layout padrão
  }));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views')); 

app.get('/', (req: Request, res: Response): void => {
    res.render('home');
});

app.listen(port, (): void => {
    console.log(`My body is ready: http://localhost:${port}`);
});
