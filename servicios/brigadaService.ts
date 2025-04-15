
import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Función que obtiene todas las brigadas.
 * @returns lista brigadas
 */
export async function obtenerBrigadas() {
    return prisma.brigada.findMany();  
}

/**
 * Funcion que crea una nueva brigada, que espera un objeto brigada con los campos del modelo,
 * excepto el id porque es un incremental esto hace el omit
 * @param data 
 * @returns 
 */
export async function crearBrigada(data: Prisma.BrigadaCreateInput) {
    return prisma.brigada.create({ data });
}

/**
 * Funcion que obtiene una brigada por su ID.
 * @param id 
 * @returns 
 */
export async function obtenerBrigadaPorId(id: number) {
    return prisma.brigada.findUnique({ where: { id } });
}

/**
 * Funcion que actualiza los datos de una brigada
 * @param id 
 * @param data indica que se pueden actualizar algunos datos de la brigada no todos
 * @returns 
 */
export async function actualizarBrigada(id: number, data: Prisma.BrigadaUpdateInput) {
    return prisma.brigada.update({ where: { id }, data });
}

/**
 * Funcion que elimina una brigada por ID.
 * @param id 
 * @returns 
 */
export async function eliminarBrigada(id: number) {
    return prisma.brigada.delete({ where: { id } });
}