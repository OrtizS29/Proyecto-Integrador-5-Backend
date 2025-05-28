
import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Función que obtiene todas las postulaciones.
 * @returns lista postulaciones
 */
export async function obtenerPostulaciones() {
    return prisma.postulacion.findMany({
        include: {
            Brigada: {
                include:{
                    Municipio: true
                }
            }
        }
    });  
}

/**
 * Funcion que crea una nueva postulacion, que espera un objeto postulacion con los campos del modelo,
 * excepto el id porque es un incremental esto hace el CreateInput
 * @param data 
 * @returns 
 */
export async function crearPostulacion(data: Prisma.PostulacionCreateInput) {
    return prisma.postulacion.create({ data });
}

export async function actualizarPostulacion(id: number, data: Prisma.PostulacionUpdateInput) {
    return prisma.postulacion.update({ where: { id }, data });
}

/**
 * Funcion que obtiene una postulacion por su ID.
 * @param id 
 * @returns 
 */
export async function obtenerPostulacionesPorBrigadista(idBrigadista: number) {
    return prisma.postulacion.findMany({
        where: {
            ID_Brigadista: idBrigadista
        },
        include: {
            Brigada: {
                include: {
                    Municipio: true
                }
            }
        }
    });
}

/**
 * Funcion que elimina una postulacion por ID.
 * @param id 
 * @returns 
 */
export async function eliminarPostulacion(id: number) {
    return prisma.postulacion.delete({ where: { id } });
}

export async function obtenerPostulacionesPorBrigada(idBrigada: number){
    return prisma.postulacion.findMany({
        where: {
            ID_Brigada: idBrigada
        },
        include: {
            Brigada: {
                include: {
                    Municipio: true,
                    
                }
                
            },
            Brigadista: true
        }
    });
}