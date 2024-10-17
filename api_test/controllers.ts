import { Request, Response } from "express";

export function getHome (request: Request, response: Response): void {

    response.json({

        message: "it's working!!",

    });

};

export function viewPhotos (request: Request, response: Response): void {

    response.json({

        ps: "i can finally see such a bs ammount of shit! :D",

        data: "27/09/2001",

    });

};

export function sendInformations (request: Request, response: Response): void {

    const { value = "expectInfo", data = "expectData" } = request.body;

    response.json({

        value: value,

        data: data,

    });

};