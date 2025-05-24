
import { Request, Response } from "express";
import * as conglomeradoService from "../servicios/conglomeradoService.ts";

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerConglomeradosController = async (req: Request,res:Response) => {
    try {
        const conglomerado = await conglomeradoService.obtenerConglomerados();
        res.json(conglomerado);
    } catch (error) {
        res.status(500);
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
export const obtenerConglomeradoPorIdController  = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const conglomerado = await conglomeradoService.obtenerConglomeradoPorId(Number(id))
        if (conglomerado) {
            res.json(conglomerado);
        } else {
            res.status(404).json({ message: "conglomerado no encontrado" });
        }
    } catch (error) {
        res.status(500);
    }
}