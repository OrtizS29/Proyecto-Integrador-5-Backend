import { Router } from "express";
import {
    obtenerBrigadistasController,
    obtenerBrigadistaPorIdController,
    crearBrigadistaController,
    actualizarBrigadistaController,
    eliminarBrigadistaController,
    obtenerBrigadistasPorIdBController
} from "../controlador/brigadistaController.ts";

const router = Router();

// Obtener todos los brigadistas
router.get("/", obtenerBrigadistasController);

// Obtener un brigadista por su número de documento (ID)
router.get("/:id", obtenerBrigadistaPorIdController);

// Crear un nuevo brigadista
router.post("/", crearBrigadistaController);

// Actualizar un brigadista por su número de documento
router.put("/:id", actualizarBrigadistaController);

// Eliminar un brigadista por su número de documento
router.delete("/:id", eliminarBrigadistaController);

router.get("/brigada/:id", obtenerBrigadistasPorIdBController);

export default router;
