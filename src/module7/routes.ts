import { Request, Response } from "express";

import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "sss38c197333",
    database: "havingfun",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const homepage = (req: Request, res: Response): void => {

    res.render("home");

};

export const sendInfo = async (req: Request, res: Response): Promise <void> => {

    const book: string = req.body.book;
    const author: string = req.body.author;
    const genre: string = req.body.genre;

    try {

        const connectDatabase = await pool.getConnection();

        try {

            const gatherItems = `INSERT INTO books (book, author, genre) VALUES (?, ?, ?)`;
            await connectDatabase.query(gatherItems, [book, author, genre]);

        } finally {
            connectDatabase.connect();
        };

    } catch (e) {
        console.error("Something went wrong", e);
        throw new Error("Something went wrong. Try again.");
    };

    if (!book && !author) res.sendStatus(404);
    console.log(`${book} and ${author}`);

    res.send(`We received ${book}, ${author}, ${genre}`);

};