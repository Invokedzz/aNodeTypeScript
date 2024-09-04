import { Request, Response } from "express";

export const homepage = (req: Request, res: Response): void => {
    const authentication = false;
    res.render('joker', {authentication});
};