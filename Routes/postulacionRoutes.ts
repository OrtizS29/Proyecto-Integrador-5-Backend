
import { Router } from "express";
import {
    obtenerPostulacionesController,
    crearPostulacionesController,
    eliminarPostulacionesController,
    obtenerPostulacionPorIdController,
    obtenerPostulacionPorBrigadaController,
    actualizarPostulacionController
} from "../controlador/postulacionController.ts";

const router = Router();

router.get("/",obtenerPostulacionesController);

router.get("/brigadista/:id", obtenerPostulacionPorIdController);

router.get("/brigada/:id", obtenerPostulacionPorBrigadaController);

router.put("/:id", actualizarPostulacionController);

router.post("/",crearPostulacionesController);

router.delete("/:id", eliminarPostulacionesController);

export default router;