import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

const application = express();
const port = process.env.PORT || 3000;

application.get('/', (req: Request, res: Response): void => {
    const newPath = path.join('./src/module4', 'test.html');
    const username = req.query.username as string;
    fs.readFile(newPath, 'utf8', (err: Error | null, data: string): void => {
        if (err) {
            console.error(err);
            return;
        };

        fs.writeFile('./src/module5/receiveUsers.txt', username || '', (err: Error | null): void => {
            if (err) {
                console.error(err);
                throw new Error("something went wrong");
            }; 

            console.log(`We received: ${username}`);

        });

        res.send(data);

    });
});

application.get('/test2.html', (req: Request, res: Response): void => {
    const testFile = path.join('./src/module4', 'test2.html');
    fs.readFile(testFile, 'utf8', (err, data): void => {
        if (err) {
            console.error(err);
            return;
        };

        setTimeout(() => {
            fs.unlink('./src/module5/receiveUsers.txt', (error: Error | null): void => {
                if (error) throw new Error("Something went wrong!");
                console.log('The file was deleted successfully!');
            });

            fs.mkdirSync('./src/module5/carlinhosInvasion/2050man.java', {recursive: true});

        }, 3000);

        res.send(data);

    });
});

application.listen(port, (): void => {
    console.log(`Access http://localhost:${port}`);
});