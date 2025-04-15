
import { Request, Response } from "express";
import * as brigadaService from "../servicios/brigadaService.ts";

/**
 * Funcion asincronica que llama al controlador de obtener Brigadas y las trae en una lista
 * @param req 
 * @param res 
 */
export const obtenerBrigadasController = async (req:Request, res: Response) => {
    try {
        const brigada = await brigadaService.obtenerBrigadas();
        res.json(brigada)
    } catch (error) {
        res.status(500);        
    }
}

/**
 * Funcion para crear una brigada con req.body lo crea exactamente como esta mapeado
 * @param req 
 * @param res 
 */
export const crearBrigadasController = async (req:Request, res: Response) => {
    try {
        const brigadaCreada = await brigadaService.crearBrigada(req.body);
        res.status(201).json(brigadaCreada);
    } catch (error: any) {
        console.error("Error al crear brigada:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
}

/**
 * Funcion para crear una brigada, se pasa un id y los datos a cambiar.
 * @param req 
 * @param res 
 */
export const actualizarBrigadasController = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const brigadaActualizada = await brigadaService.actualizarBrigada(
            Number(id),
            req.body
        );
        res.status(200).json(brigadaActualizada);
    } catch (error) {
        res.status(500);
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const eliminarBrigadasController = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const brigadaEliminada = await brigadaService.eliminarBrigada(Number(id))
        res.status(200).json(brigadaEliminada);
    } catch (error) {
        res.status(500);
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerBrigadaPorIdController  = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const brigada = await brigadaService.obtenerBrigadaPorId(Number(id))
        if (brigada) {
            res.json(brigada);
        } else {
            res.status(404).json({ message: "Brigada no encontrada" });
        }
    } catch (error) {
        res.status(500);
    }
}