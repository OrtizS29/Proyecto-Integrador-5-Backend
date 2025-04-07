/**
 * Importaciones para el Request y respones para comunicacion con Angular
 */
import { Request, Response} from "express";
import * as usuarioService from "../../servicios/logFirebase/usuarioService.ts";
/**
 * Registar usuario con Firebase
 * @param req 
 * @param res 
 */
export const registrarUsuario = async (req: Request, res: Response) => {
    try{
        /*
         * El re.body es lo que Angular mandar en un Json entonces desestructuracmos
         */
        const { email, password } = req.body
        const nuevoUsuario = await usuarioService.crearUsuario(email,password);
        res.status(201).json(nuevoUsuario);
    }catch (error){
        res.status(500).json({ mensaje: "Error al registrar usuario", error});
    }
};
/**
 * Elimina un usuario 
 * @param req 
 * @param res 
 */
export const eliminarUsuario = async(req: Request, res: Response) => {
    try {
        const {uid}  = req.params;
        await usuarioService.eliminarUsuario(uid);
        res.status(200).json({mensaje: "Usuario eliminado"});
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar usuario", error });
    }
};

export const actualizarUsuario = async(req: Request, res: Response) => {
    try {
        const {uid}  = req.params;
        const datosActualizados = req.body;
        const usuarioActualizado = await usuarioService.actualizarUsuario(uid,datosActualizados);
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario", error });
    }
};
/**
 * Buscar un usuario por email
 * @param req 
 * @param res 
 */
export const buscarUsuario = async(req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const usuario = await usuarioService.obtenerUsuarioPorEmail(email);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(404).json({ mensaje: "Usuario no encontrado", error });
    }
};
