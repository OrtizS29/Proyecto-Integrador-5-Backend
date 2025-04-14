import prisma from "./prisma";

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
export async function crearBrigada(data: Omit<typeof prisma.brigada, 'id'>) {
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
export async function actualizarBrigada(id: number, data: Partial<typeof prisma.brigada>) {
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