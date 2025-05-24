
import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Funcion que obtiene todos los municipios
 * @returns 
 */
export async function obtenerConglomerados(){
    return prisma.conglomerado.findMany();
}

/**
 * Funcion para traer un municipio por su id
 * @param id 
 * @returns 
 */
export async function obtenerConglomeradoPorId(id:number) {
    return prisma.conglomerado.findUnique({ where: { id }});
}