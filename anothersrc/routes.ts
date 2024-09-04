import { Request, Response } from "express";

export const loginpage = (req: Request, res: Response): void => {
    res.render('login');
};

export const postlogin = (req: Request, res: Response): void => {

    let auth = false;

    const name: string = req.body.name;
    const username: string = req.body.username;
    const password: string = req.body.password;

    if (username && password) auth = true;
    auth = false;

    res.render('postlogin', {name, username, password, auth});

};