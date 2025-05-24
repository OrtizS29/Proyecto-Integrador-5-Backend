

import { Request, Response } from "express";
import * as municipioService from "../servicios/municipioService.ts";

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerMunicipiosController = async (req: Request,res:Response) => {
    try {
        const municipio = await municipioService.obtenerMunicipios();
        res.json(municipio);
    } catch (error) {
        res.status(500);
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerMunicipioPorIdController  = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const municipio = await municipioService.obtenerMunicipioPorId(Number(id))
        if (municipio) {
            res.json(municipio);
        } else {
            res.status(404).json({ message: "municipio no encontrada" });
        }
    } catch (error) {
        res.status(500);
    }
}