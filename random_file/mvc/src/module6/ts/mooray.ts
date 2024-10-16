import { Request, Response } from "express";

export const homepage = (req: Request, res: Response): void => {
    
    let target = ['ID', 'ID2', 'ID3'];

    const userInfo = {
        username: 'Joker',
        password: '12345'
    };

    const authentication = false;
    res.render('joker', {authentication, target, userInfo});

};

export const aboutpage = (req: Request, res: Response): void => {

    const pages = [
        {
            username: 'Joker',
            password: '12345',            
        },
        {
            username: 'Batman',
            password: '12ddeqqsa',
        },
        {
            username: 'Superman',
            password: '1234xwre',
        },
    ];

    res.render('aboutpage', {pages});

};