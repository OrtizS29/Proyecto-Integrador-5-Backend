
import { Router } from "express";
import {
    obtenerMunicipiosController,
    obtenerMunicipioPorIdController
} from "../controlador/municipioController.ts";

const router = Router();

router.get("/", obtenerMunicipiosController);

router.get("id", obtenerMunicipioPorIdController);

export default router;