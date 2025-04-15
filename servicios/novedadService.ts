
import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Función que obtiene todas las brigadas.
 * @returns lista brigadas
 */
export async function obtenerNovedades() {
    return prisma.novedad.findMany();  
}

/**
 * Funcion que crea una nueva brigada, que espera un objeto brigada con los campos del modelo,
 * excepto el id porque es un incremental esto hace el CreateInput
 * @param data 
 * @returns 
 */
export async function crearNovedad(data: Prisma.NovedadCreateInput) {
    return prisma.novedad.create({ data });
}

/**
 * Funcion que obtiene una brigada por su ID.
 * @param id 
 * @returns 
 */
export async function obtenerNovedadPorId(id: number) {
    return prisma.novedad.findUnique({ where: { id } });
}

/**
 * Funcion que actualiza los datos de una brigada
 * @param id 
 * @param data indica que se pueden actualizar algunos datos de la brigada no todos
 * @returns 
 */
export async function actualizarNovedad(id: number, data: Prisma.NovedadUpdateInput) {
    return prisma.novedad.update({ where: { id }, data });
}

/**
 * Funcion que elimina una brigada por ID.
 * @param id 
 * @returns 
 */
export async function eliminarNovedad(id: number) {
    return prisma.novedad.delete({ where: { id } });
}