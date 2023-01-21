import { addUserController } from './user.controller';

import express from "express";
const router = express.Router();

import {
  validateSignup,
} from "./user.validator";

router.post("/signup", validateSignup, addUserController);

export default router;
