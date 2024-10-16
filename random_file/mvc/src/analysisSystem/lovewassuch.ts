import { Request, Response, NextFunction } from "express";

export const home = (req: Request, res: Response): void => {

    res.send("Welcome!");

};

export const about = (req: Request, res: Response): void => {

    res.send("About!");

};

export const error = (req: Request, res: Response, next: NextFunction): void => {

    res.sendStatus(404);
    next();

};