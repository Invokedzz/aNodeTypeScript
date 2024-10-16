import express, { Request, Response } from 'express';
const application = express();
application.get('/', (req: Request, res: Response): void => {
    res.send('Hello World!');
});

application.use((req: Request, res: Response): void => {
    res.send(404) || res.send(505);
});

application.listen(3000, (): void => {
    console.log(`Our server is running at: http://localhost:3000`); 
});

export default 1;