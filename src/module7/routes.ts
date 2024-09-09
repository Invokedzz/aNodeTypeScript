import { Request, Response } from "express";

export const homepage = (req: Request, res: Response): void => {

    res.render("home");

};

export const sendInfo = (req: Request, res: Response): void => {

    const book: string = req.body.book;
    const author: string = req.body.author;
    const genre: string = req.body.genre;

    if (!book && !author) res.sendStatus(404);
    console.log(`${book} and ${author}`);

    res.send(`We received ${book}, ${author}, ${genre}`);

};