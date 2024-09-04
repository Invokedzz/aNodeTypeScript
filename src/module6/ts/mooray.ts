import { Request, Response } from "express";

export const homepage = (req: Request, res: Response): void => {
    const authentication = true;
    res.render('handlebarsIF', {authentication});
};