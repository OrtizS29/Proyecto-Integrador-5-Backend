/*
 * Importa el router de express que es un mini-servidor
 */
import { Router } from "express";
/*
 * Importacion del archivo registrar
 */
import { buscarUsuario, 
    registrarUsuario, 
    eliminarUsuario, 
    actualizarUsuario } from "../controlador/usuario/usuarioController.ts";
/*
 * Instancia de Router para definir tus rutas relacionadas con usuarios
 */
const router = Router();
/*
 * Creacion usuarios por la ruta POST
 */
router.post("/usuarios", registrarUsuario);
/*
 * Elimina usuario por la ruta DELETE
 */
router.delete("/usuarios/:uid",eliminarUsuario);
/*
 * Actualizar usuario
 */
router.put("/usuarios/:uid",actualizarUsuario);
/*
 * Buscar usuario por email
 */
router.get("/usuarios/:email",buscarUsuario);
export default router;