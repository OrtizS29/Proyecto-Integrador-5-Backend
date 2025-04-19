import { Router } from "express";
import {
    obtenerTitulosController,
    obtenerTituloPorIdController,
    crearTituloController,
    actualizarTituloController,
    eliminarTituloController,
    obtenerTitulosPorDocumentoController
} from "../controlador/tituloController.ts";

const router = Router();

// Obtener todos los títulos
router.get("/", obtenerTitulosController);

// Obtener un título por ID
router.get("/:id", obtenerTituloPorIdController);

// Crear un nuevo título
router.post("/", crearTituloController);

// Actualizar un título existente
router.put("/:id", actualizarTituloController);

// Eliminar un título
router.delete("/:id", eliminarTituloController);

router.get("/brigadista/:documento", obtenerTitulosPorDocumentoController)

export default router;
