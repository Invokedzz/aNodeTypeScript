import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
    if (res.sendStatus(200)) res.send("<h1>HTML SUCKS</h1>");
    res.send(404) || res.send(505);
});

app.listen(port, (): void => {
    console.log(`Our server is at: http://localhost:${port}`);
});