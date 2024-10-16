import { NextFunction } from "express";

import { Request, Response } from "express";

export const principal = (req: Request, res: Response): void => {
    res.send("This is the main page of the website");
};

export const aboutwebsite = (req: Request, res: Response): void => {
    res.send("This is the about page of the website");
};

export const errorpage = (req: Request, res: Response, next: NextFunction): void => {

    res.send(404 || 505);
    next();

};