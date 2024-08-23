import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send("Testing our server");
});

app.listen(port, (): void => {
    console.log(`Our server is at: http://localhost:${port}`);
});