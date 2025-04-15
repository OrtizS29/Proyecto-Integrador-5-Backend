
import { Request, Response } from "express";
import * as novedadService from "../servicios/novedadService.ts";

export const obtenerNovedadesController = async (req:Request, res:Response) => {
    try {
        const novedad = await novedadService.obtenerNovedades();
        res.status(200).json(novedad);
    } catch (error) {
        res.status(500); 
    }
}

export const crearNovedadesController = async (req:Request, res:Response) => {
    try {
        const novedadCreada = await novedadService.crearNovedad(req.body);
        res.status(201).json(novedadCreada);
    } catch (error:any) {
        console.error("Error al crear brigada:", error);
        res.status(500).json({ error: error.message || "Error del servidor" }); 
    }
}

export const actualizarNovedadesController = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const novedadActualizada = await novedadService.actualizarNovedad(
            Number(id),
            req.body
        );
        res.status(200).json(novedadActualizada);
    } catch (error) {
        res.status(500);
    }
}

export const eliminarNovedadesController = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const novedadEliminada = await novedadService.eliminarNovedad(Number(id));
        res.status(200).json(novedadEliminada);
    } catch (error) {
        res.status(500);
    }
}

export const obtenerNovedadesPorIdController = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        const novedad = await novedadService.obtenerNovedadPorId(Number(id));
        if (novedad) {
            res.status(200).json(novedad);
        }else{
            res.status(404).json({ message: "Brigada no encontrada" });
        }
    } catch (error) {
        res.status(500);
    }
}