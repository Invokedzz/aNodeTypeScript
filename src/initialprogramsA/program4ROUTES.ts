import { Request, Response } from "express";
import path from "path";

export const mainpage = (req: Request, res: Response): void => {

    const mainPath = path.join(__dirname, '/frontkkkk/mainpage.html');
    res.sendFile(mainPath);

};

export const sendmainFile = (req: Request, res: Response): void => {

    const enterPath = path.join(__dirname, 'frontkkkk/enterpage.html')

    const username: string = req.body.username;
    const password: string = req.body.password;

    if (username.length >= 5 && password.length >= 10) res.sendFile(enterPath);
    res.send("Manda as coisas direito");

    console.log(`We received ${username}, ${password}`);

};