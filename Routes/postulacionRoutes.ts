
import { Router } from "express";
import {
    obtenerPostulacionesController,
    crearPostulacionesController,
    eliminarPostulacionesController,
    obtenerPostulacionPorIdController,
} from "../controlador/postulacionController.ts";

const router = Router();

router.get("/",obtenerPostulacionesController);

router.get("/:id", obtenerPostulacionPorIdController);

router.post("/",crearPostulacionesController);

router.delete("/:id", eliminarPostulacionesController);

export default router;