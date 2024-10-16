import { Request, Response } from "express";

export const homePage = (req: Request, res: Response): void => {
    res.send(`This is the home page!`);
};

export const aboutPage = (req: Request, res: Response): void => {
    res.send(`This is the about page!`);
};

export default {
    homePage,
    aboutPage
}