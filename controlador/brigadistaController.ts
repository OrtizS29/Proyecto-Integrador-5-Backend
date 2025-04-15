import { Request, Response } from "express";
import * as brigadistaService from "../servicios/BrigadistaService.ts";

/**
 * Función que obtiene todos los brigadistas
 */
export const obtenerBrigadistasController = async (req: Request, res: Response) => {
    try {
        const brigadistas = await brigadistaService.obtenerBrigadistas();
        res.json(brigadistas);
    } catch (error) {
        console.error("Error al obtener brigadistas:", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

/**
 * Función que obtiene un brigadista por ID (Número de Documento)
 */
export const obtenerBrigadistaPorIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const brigadista = await brigadistaService.obtenerBrigadistaPorId(Number(id));
        if (!brigadista) {
            return res.status(404).json({ error: "Brigadista no encontrado" });
        }
        res.json(brigadista);
    } catch (error) {
        console.error("Error al buscar brigadista:", error);
        res.status(500).json({ error: "Error del servidor" });
    }
};

/**
 * Función que crea un nuevo brigadista
 */
export const crearBrigadistaController = async (req: Request, res: Response) => {
    try {
        const brigadistaCreado = await brigadistaService.crearBrigadista(req.body);
        res.status(201).json(brigadistaCreado);
    } catch (error: any) {
        console.error("Error al crear brigadista:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};

/**
 * Función que actualiza un brigadista
 */
export const actualizarBrigadistaController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const brigadistaActualizado = await brigadistaService.actualizarBrigadista(Number(id), req.body);
        res.json(brigadistaActualizado);
    } catch (error: any) {
        console.error("Error al actualizar brigadista:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};

/**
 * Función que elimina un brigadista
 */
export const eliminarBrigadistaController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await brigadistaService.eliminarBrigadista(Number(id));
        res.json({ mensaje: "Brigadista eliminado correctamente" });
    } catch (error: any) {
        console.error("Error al eliminar brigadista:", error);
        res.status(500).json({ error: error.message || "Error del servidor" });
    }
};
