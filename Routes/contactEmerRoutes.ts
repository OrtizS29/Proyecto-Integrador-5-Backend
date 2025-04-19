
import { Router } from "express";
import{
    obtenerContactEmerController,
    crearContactEmerController,
    actualizarContactEmerController,
    eliminarContactEmerController,
    obtenerContactEmerControllerPorId,
    obtenerContactosPorDocumentoController
} from "../controlador/contactEmerController.ts";

const router = Router();

router.get("/",obtenerContactEmerController);

router.get("/:id",obtenerContactEmerControllerPorId);

router.post("/",crearContactEmerController);

router.put("/:id",actualizarContactEmerController);

router.delete("/:id",eliminarContactEmerController);

router.get("/brigadista/:documento", obtenerContactosPorDocumentoController);

export default router;