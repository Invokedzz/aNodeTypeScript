import { Request, Response } from "express";
import path from "path";

export const mainpage = (req: Request, res: Response): void => {

    const mainPath = path.join(__dirname, '/frontkkkk/mainpage.html');
    res.sendFile(mainPath);

};

export const sendmainFile = (req: Request, res: Response): void => {
  
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) res.render('enterpage');
    res.status(404);

    console.log(`We received ${username}, ${password}`);

};

export const enterpage = (req: Request, res: Response): void => {
    
    const enterPath = path.join(__dirname, '/frontkkkk/enteroage.html');
    res.sendFile(enterPath);

};