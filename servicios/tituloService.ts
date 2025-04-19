import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Función que obtiene todos los títulos.
 * @returns lista de títulos
 */
export async function obtenerTitulos() {
    return prisma.titulos.findMany({
        include: { Brigadista: true },
    });
}

/**
 * Función que crea un nuevo título.
 * @param data objeto con los campos para crear un título
 * @returns título creado
 */
export async function crearTitulo(data: Prisma.TitulosCreateInput) {
    return prisma.titulos.create({ data });
}

/**
 * Función que obtiene un título por su ID.
 * @param id identificador del título
 * @returns título correspondiente
 */
export async function obtenerTituloPorId(id: number) {
    return prisma.titulos.findUnique({
        where: { id },
        include: { Brigadista: true },
    });
}

/**
 * Función que actualiza un título.
 * @param id identificador del título
 * @param data campos actualizados del título
 * @returns título actualizado
 */
export async function actualizarTitulo(id: number, data: Prisma.TitulosUpdateInput) {
    return prisma.titulos.update({
        where: { id },
        data,
    });
}

/**
 * Función que elimina un título por su ID.
 * @param id identificador del título
 * @returns título eliminado
 */
export async function eliminarTitulo(id: number) {
    return prisma.titulos.delete({
        where: { id },
    });
}

export async function obtenerTitulosPorDocumento(doc: number) {
    return prisma.titulos.findMany({
        where: {
            Doc_Brigadista: doc,
        },
    });
}