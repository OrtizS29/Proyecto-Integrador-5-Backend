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
    return prisma.brigadista.findUnique({ where: { Numero_Documento } });
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
    const { Brigada,  Contacto_Emergencia, Titulos, ...dataSinIdRelacion } = data;

    return prisma.brigadista.update({
        where: { Numero_Documento },
        data: dataSinIdRelacion,
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

export async function obtenerBrigadasPorIdB(id: number) {
  return prisma.brigadista.findMany({
    where: {
      Id_Brigada: id,
    },
    select: {
      Numero_Documento: true,
      Nombre: true,
      Apellido: true,
      Profesion: true,
      Cargo: true,
      Correo_Electronico: true,
      Brigada: {
        select: {
          Nombre: true,
          Fecha_Inicio: true,
          Municipio: {
            select: {
              Nombre: true,  // aquí el campo del municipio que quieres mostrar
            }
          }
        }
      }
    }
  });
}

export const asignarBrigada = async (
    Numero_Documento: number,
    Id_Brigada: number,
    Cargo: string
) => {
    const brigadista = await prisma.brigadista.findUnique({
        where: {Numero_Documento: Numero_Documento},
    });

    const brigada = await prisma.brigada.findUnique({
        where: { id: Id_Brigada},
    });

    if (!brigadista) {
        throw new Error("Brigadista no encontrado");
    }else if (!brigada) {
        throw new Error("Brigada no encontrada");
    }

    const actualizado = await prisma.brigadista.update({
        where: {
            Numero_Documento,
        },
        data: {
            Id_Brigada,
            Cargo,
        },
    });

    return actualizado;
};