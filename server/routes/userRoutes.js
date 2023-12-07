import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

export const router = Router()

router.route("/register").post(registerUser)

