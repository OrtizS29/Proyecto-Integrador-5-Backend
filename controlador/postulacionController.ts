

import { Request, Response } from "express";
import * as postulacionService from "../servicios/postulacionService.ts";

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerPostulacionesController = async (req:Request, res: Response) => {
    try {
        const postulacion = await postulacionService.obtenerPostulaciones();
        res.json(postulacion)
    } catch (error) {
        res.status(500);        
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const crearPostulacionesController = async (req:Request, res: Response) => {
    try {
        const postulacionCreada = await postulacionService.crearPostulacion(req.body);
        res.status(201).json(postulacionCreada);
    } catch (error: any) {
        console.error("Error al crear postulacion:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const eliminarPostulacionesController = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const postulacionEliminada = await postulacionService.eliminarPostulacion(Number(id))
        res.status(200).json(postulacionEliminada);
    } catch (error: any) {
        console.error("Error al eliminar postulacion:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerPostulacionPorIdController  = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const postulacion = await postulacionService.obtenerPostulacionesPorBrigadista(Number(id))
        if (postulacion) {
            res.json(postulacion);
        } else {
            res.status(404).json({ message: "Postulacion no encontrada" });
        }
    } catch (error) {
        res.status(500);
    }
}