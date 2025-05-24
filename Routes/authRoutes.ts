
import { Router } from "express";
import { login } from "../controlador/authController.ts";

const router = Router();

router.post("/login", login);

export default router;
