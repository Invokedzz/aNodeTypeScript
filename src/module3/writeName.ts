import express, { Request, Response } from "express";
//import url from "url";
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
    if (!res.status(200)) res.send(404) || res.send(505);
 //   const urlInfo = url.parse(req.url, true);
    // const name = urlInfo.query.name;
    const name = req.query.name; 
    res.send(`<form method="GET">
            <input type="text" name="name">
            <input type="submit">
        </form>
        <p>Name: ${name ? name : ''}</p>`);
});

app.listen(port, (): void => {
    console.log(`Our server is at: http://localhost:${port}`);
});

