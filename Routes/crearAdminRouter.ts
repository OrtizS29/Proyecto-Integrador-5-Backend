
import express from "express";
import { crearAdmin } from "../controlador/crearAdminController.ts";

const router = express.Router();

router.post("/crear-admin", crearAdmin);

export default router;
