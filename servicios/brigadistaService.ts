import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Obtiene todos los brigadistas
 * @returns Lista de brigadistas
 */
export async function obtenerBrigadistas() {
    return prisma.brigadista.findMany({
    include: {
            Brigada: true,
            Contacto_Emergencia: true,
            Titulos: true,
        },
    });
}

/**
 * Crea un brigadista
 * @param data Los datos del brigadista
 * @returns Brigadista creado
 */
export async function crearBrigadista(data: Prisma.BrigadistaCreateInput) {
    return prisma.brigadista.create({ data });
}

/**
 * Obtiene un brigadista por documento
 * @param Numero_Documento Número de documento
 * @returns Brigadista encontrado
 */
export async function obtenerBrigadistaPorId(Numero_Documento: number) {
    return prisma.brigadista.findUnique({
        where: { Numero_Documento },
        include: {
            Brigada: true,
            Contacto_Emergencia: true,
            Titulos: true,
        },
    });
}

/**
 * Actualiza un brigadista
 * @param Numero_Documento ID del brigadista
 * @param data Datos a actualizar
 * @returns Brigadista actualizado
 */
export async function actualizarBrigadista(
    Numero_Documento: number,
    data: Prisma.BrigadistaUpdateInput
) {
    return prisma.brigadista.update({
        where: { Numero_Documento },
        data,
    });
}

/**
 * Elimina un brigadista
 * @param Numero_Documento ID del brigadista
 * @returns Brigadista eliminado
 */
export async function eliminarBrigadista(Numero_Documento: number) {
    return prisma.brigadista.delete({
        where: { Numero_Documento },
    });
}
