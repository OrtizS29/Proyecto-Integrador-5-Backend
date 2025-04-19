
import { Request, Response } from "express";
import * as contactEmerService from "../servicios/contactEmerService.ts";

/**
 * uncion asincronica que llama al controlador de obtener Brigadas y las trae en una lista
 * @param req 
 * @param res 
 */
export const obtenerContactEmerController = async (req:Request, res:Response) => {
    try {
        const contactEmer = await contactEmerService.obtenerContactEmer();
        res.status(200).json(contactEmer);
    } catch (error) {
        res.status(500);  
    }
}

/**
 * Funcion para crear un contacto de emergencia con req.body lo crea exactamente como esta 
 * mapeado
 * @param req 
 * @param res 
 */
export const crearContactEmerController = async (req:Request, res:Response) => {
    try {
        const contactEmerCreado = await contactEmerService.crearContactEmer(req.body);
        res.status(201).json(contactEmerCreado);
    } catch (error:any) {
        console.error("Error al crear brigada:", error);
        res.status(500).json({ error: error.message || "Error del servidor" }); 
    }
}

/**
 * Funcion para actualizar una brigada, se pasa un id y los datos a cambiar.
 * @param req 
 * @param res 
 */
export const actualizarContactEmerController = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const contactEmerActualizado = await contactEmerService.actualizarContactEmer(
            Number(id),
            req.body
        );
        res.status(200).json(contactEmerActualizado);
    } catch (error) {
        res.status(500);  
    }
}

/**
 * Funcion para actualizar un contacto de emergencia, se pasa un id y los datos a cambiar.
 * @param req 
 * @param res 
 */
export const eliminarContactEmerController = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const contactEmerEliminada = await contactEmerService.eliminarContactEmer(Number(id));
        res.status(200).json(contactEmerEliminada);
    } catch (error) {
        res.status(500);  
    }
}

/**
 * Funcion para optener el id con req.params y devolver si esta o no esta.
 * @param req 
 * @param res 
 */
export const obtenerContactEmerControllerPorId = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const contactEmer = await contactEmerService.obtenerContactEmerPorId(Number(id));
        if(contactEmer){
            res.status(200).json(contactEmer);
        }else{
            res.status(404).json({ message: "Brigada no encontrada" });
        }
    } catch (error) {
        res.status(500);  
    }
}
export const obtenerContactosPorDocumentoController = async (req: Request, res: Response) => {
    const { documento } = req.params;
    try {
        const contactos = await contactEmerService.obtenerContactEmerPorDocumento(Number(documento));
        if (contactos.length > 0) {
            res.status(200).json(contactos);
        } else {
            res.status(404).json({ mensaje: "No se encontraron contactos de emergencia para este brigadista" });
        }
    } catch (error: any) {
        console.error("Error al obtener contactos por documento:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};