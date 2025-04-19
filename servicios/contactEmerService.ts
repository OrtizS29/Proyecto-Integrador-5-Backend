
import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Función que obtiene todos los contactos de emergencia.
 * @returns lista contactos de emergencia
 */
export async function obtenerContactEmer() {
    return prisma.contacto_Emergencia.findMany();
}

/**
 * Funcion que crea un nuevo contacto de emergencia, que espera un objeto brigada con los 
 * campos del modelo, excepto el id porque es un incremental
 * @param data 
 * @returns 
 */
export async function crearContactEmer(data: Prisma.Contacto_EmergenciaCreateInput) {
    return prisma.contacto_Emergencia.create({data});
}

/**
 * Funcion que actualiza un contacto de emergencia del personal
 * @param id 
 * @param data indica que se pueden actualizar algunos datos de la brigada no todos
 * @returns 
 */
export async function actualizarContactEmer(id:number,data: Prisma.Contacto_EmergenciaUpdateInput) {
    return prisma.contacto_Emergencia.update({where: {id} ,data})
}

/**
 * Funcion que obtiene un contacto de emergencia por su ID.
 * @param id 
 * @returns 
 */
export async function obtenerContactEmerPorId(id:number) {
    return prisma.contacto_Emergencia.findUnique({where: {id} });
}

/**
 * Funcion que elimina un contacto de por ID.
 * @param id 
 * @returns 
 */
export async function eliminarContactEmer(id: number) {
    return prisma.contacto_Emergencia.delete({where: {id} });
}
/**
 * Obtener contactos de emergencia por documento del brigadista
 * @param doc Documento del brigadista
 */
export async function obtenerContactEmerPorDocumento(doc: number) {
    return prisma.contacto_Emergencia.findMany({
        where: {
            Doc_Brigadista: doc,
        },
    });
}