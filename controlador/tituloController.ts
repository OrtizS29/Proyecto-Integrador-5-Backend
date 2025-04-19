import { Request, Response } from "express";
import * as titulosService from "../servicios/tituloService.ts";

/**
 * Función que obtiene todos los títulos
 */
export const obtenerTitulosController = async (req: Request, res: Response) => {
    try {
        const titulos = await titulosService.obtenerTitulos();
        res.json(titulos);
    } catch (error) {
        console.error("Error al obtener títulos:", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

/**
 * Función que obtiene un título por ID
 */
export const obtenerTituloPorIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const titulo = await titulosService.obtenerTituloPorId(Number(id));
        if (titulo) {
            res.status(200).json(titulo);
        } else {
            res.status(404).json({ message: "Título no encontrado" });
        }
    } catch (error: any) {
        console.error("Error al buscar título:", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

/**
 * Función que crea un nuevo título
 */
export const crearTituloController = async (req: Request, res: Response) => {
    try {
        const tituloCreado = await titulosService.crearTitulo(req.body);
        res.status(201).json(tituloCreado);
    } catch (error: any) {
        console.error("Error al crear título:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};

/**
 * Función que actualiza un título
 */
export const actualizarTituloController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tituloActualizado = await titulosService.actualizarTitulo(Number(id), req.body);
        res.json(tituloActualizado);
    } catch (error: any) {
        console.error("Error al actualizar título:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};

/**
 * Función que elimina un título
 */
export const eliminarTituloController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await titulosService.eliminarTitulo(Number(id));
        res.json({ mensaje: "Título eliminado correctamente" });
    } catch (error: any) {
        console.error("Error al eliminar título:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};

export const obtenerTitulosPorDocumentoController = async (req: Request, res: Response) => {
    const { documento } = req.params;
    try {
        const titulos = await titulosService.obtenerTitulosPorDocumento(Number(documento));
        if (titulos.length > 0) {
            res.status(200).json(titulos);
        } else {
            res.status(404).json({ mensaje: "No se encontraron títulos para este brigadista" });
        }
    } catch (error:any) {
        console.error("Error al obtener títulos por documento:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
}