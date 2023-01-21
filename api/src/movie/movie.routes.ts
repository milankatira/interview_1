import { getAllMoview } from './movie.controller';

import express from "express";
const router = express.Router();

router.get("/movies", getAllMoview);

export default router;
