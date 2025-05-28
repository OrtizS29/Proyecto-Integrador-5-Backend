
import { Router } from "express";
import {
    obtenerPostulacionesController,
    crearPostulacionesController,
    eliminarPostulacionesController,
    obtenerPostulacionPorIdController,
    obtenerPostulacionPorBrigadaController
} from "../controlador/postulacionController.ts";

const router = Router();

router.get("/",obtenerPostulacionesController);

router.get("/brigadista/:id", obtenerPostulacionPorIdController);

router.get("/brigada/:id", obtenerPostulacionPorBrigadaController);

router.post("/",crearPostulacionesController);

router.delete("/:id", eliminarPostulacionesController);

export default router;