
import { Router } from "express";
import { notificarBrigada } from "../controlador/correoController.ts";

const router = Router();

router.post("/:id", notificarBrigada);

export default router;