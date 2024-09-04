import { Request, Response } from "express";

export const homepage = (req: Request, res: Response): void => {
    
    let target = ['ID', 'ID2', 'ID3'];

    const authentication = false;
    res.render('joker', {authentication, target});
    
};