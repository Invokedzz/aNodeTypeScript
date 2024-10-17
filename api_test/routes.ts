import { Router } from "express";

import { getHome, viewPhotos, sendInformations } from "./controllers";

const router = Router();

router.get('/', getHome);

router.get('/photos', viewPhotos);

router.post('/sendinfo', sendInformations);

export { router };