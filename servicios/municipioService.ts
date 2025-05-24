
import prisma from "./prisma.ts";
import { Prisma } from "@prisma/client";

/**
 * Funcion que obtiene todos los municipios
 * @returns 
 */
export async function obtenerMunicipios(){
    return prisma.municipio.findMany();
}

/**
 * Funcion para traer un municipio por su id
 * @param id 
 * @returns 
 */
export async function obtenerMunicipioPorId(id:number) {
    return prisma.municipio.findUnique({ where: { id }});
}