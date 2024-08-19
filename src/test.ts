import express, { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response): void => {
    res.send('Hello World!');
});

app.listen(3000, (): void => {
    console.log(`Our server is running at: http://localhost:3000`); 
});

export default 1;