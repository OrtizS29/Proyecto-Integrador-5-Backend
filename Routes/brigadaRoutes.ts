
import { Router } from "express";
import {
    obtenerBrigadasController,
    crearBrigadasController,
    actualizarBrigadasController,
    eliminarBrigadasController,
    obtenerBrigadaPorIdController,
} from "../controlador/brigadaController.ts";

const router = Router();

router.get("/",obtenerBrigadasController);

router.get("/:id", obtenerBrigadaPorIdController);

router.post("/",crearBrigadasController);

router.put("/:id", actualizarBrigadasController);

router.delete("/:id", eliminarBrigadasController);

export default router;
