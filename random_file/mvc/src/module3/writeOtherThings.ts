import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

export class ourServer {
    generateRoutes (): void {
        app.get('/', (req: Request, res: Response): void => {
            if (!res.status(200)) res.send(404) || res.send(505);
            const username = req.query.username;
            res.send(`<form method="GET">
            <input type="text" name="username">
            <input type="submit">
        </form>
        <p>Name: ${username ? username : ''}</p>`);

        });

        app.get('/aboutus', (req: Request, res: Response): void => {
            if (!res.status(200)) res.send(404) || res.send(505);
            const password = req.query.password;
            res.send(`<form method="GET">
            <input type="text" name="password">
            <input type="submit">
        </form>
        <p>Password: ${password ? password : ''}</p>`)
        });

    };

    startServer (): void {
        app.listen(port, (): void => {
            console.log(`Our server is at: http://localhost:${port}`);
        });
    };

}

const startClass = new ourServer();
startClass.generateRoutes();
startClass.startServer();

export default 1;