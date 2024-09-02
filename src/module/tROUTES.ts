import { Request, Response } from "express";
import path from "path";

export const home = (req: Request, res: Response): void => {
    const pathHOME = path.join(__dirname, 'discoverID/homepage.html');
    res.sendFile(pathHOME); 
};

export const about = (req: Request, res: Response): void => {
    const pathABOUT = path.join(__dirname, 'discoverID/aboutpage.html');
    res.sendFile(pathABOUT);
};

export const restrict = (req: Request, res: Response): void => {
    const pathRESTRICT = path.join(__dirname, 'discoverID/restrictpage.html');
    res.sendFile(pathRESTRICT);
};

export const homePOST = (req: Request, res: Response): void => {
    
    const username = req.body.username;
    const user = req.body.user;
    const password = req.body.password;

    if (!username && !user) res.send("Manda as coisas direito");

    res.send(`We received ${username}, ${user}, ${password}`);	

};

export const aboutPOST = (req: Request, res: Response): void => {

    const info = req.body.info;

    if (!info) res.send("Manda as coisas direito");
    res.send(`We received ${info}`);

};