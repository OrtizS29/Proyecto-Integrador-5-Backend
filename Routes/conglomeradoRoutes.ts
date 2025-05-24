
import { Router } from "express";
import {
    obtenerConglomeradosController,
    obtenerConglomeradoPorIdController
} from "../controlador/conglomeradoController.ts";

const router =Router();

router.get("/", obtenerConglomeradosController);

router.get("/:id", obtenerConglomeradoPorIdController);

export default router;