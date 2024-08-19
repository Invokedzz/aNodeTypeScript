import express, { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log(`Our server is running at: http://localhost:3000`); 
});