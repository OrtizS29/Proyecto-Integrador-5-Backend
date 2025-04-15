
import { Router } from "express";
import{
    obtenerContactEmerController,
    crearContactEmerController,
    actualizarContactEmerController,
    eliminarContactEmerController,
    obtenerContactEmerControllerPorId
} from "../controlador/contactEmerController.ts";

const router = Router();

router.get("/",obtenerContactEmerController);

router.get("/:id",obtenerContactEmerControllerPorId);

router.post("/",crearContactEmerController);

router.put("/:id",actualizarContactEmerController);

router.delete("/:id",eliminarContactEmerController);

export default router;