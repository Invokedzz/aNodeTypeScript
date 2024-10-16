import { Request, Response } from "express";

export const home = (req: Request, res: Response): void => {
    res.render('home');
};

export const about = (req: Request, res: Response): void => {
    res.render('about');
};

export const addinfo = (req: Request, res: Response): void => {
    res.render('addinfo');
};

export const addinfoPOST = (req: Request, res: Response): void => {
    
    const username: string = req.body.username;
    const information: string = req.body.information;

    if (username && information) res.render('receivedinfo', {username, information});
    console.log(`We received ${username}, ${information}`);

};