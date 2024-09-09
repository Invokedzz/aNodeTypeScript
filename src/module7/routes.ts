import { Request, Response } from "express";

export const homepage = (req: Request, res: Response): void => {

    res.render("home");

};

export const sendInfo = (req: Request, res: Response): void => {

    const book = req.body.book;
    const author = req.body.author;
    const genre = req.body.genre;

    res.send(`We received ${book}, ${author}, ${genre}`);

};