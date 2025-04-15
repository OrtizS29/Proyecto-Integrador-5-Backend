
import { Router } from "express";
import {
    obtenerNovedadesController,
    crearNovedadesController,
    actualizarNovedadesController,
    eliminarNovedadesController,
    obtenerNovedadesPorIdController
} from "../controlador/novedadController.ts";

const router = Router();

router.get("/",obtenerNovedadesController);

router.get("/:id", obtenerNovedadesPorIdController);

router.post("/", crearNovedadesController);

router.put("/:id", actualizarNovedadesController);

router.delete("/:id", eliminarNovedadesController);

export default router;