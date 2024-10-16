import { Router } from "express";

import { getHome, viewPhotos } from "./controllers";

const router = Router();

router.get('/', getHome);

router.get('/photos', viewPhotos);

export { router };