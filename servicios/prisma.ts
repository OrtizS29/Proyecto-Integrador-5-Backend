/*
 * Este archivo crea una instancia del cliente de Prisma y la exporta para poderla usarla.
 */
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient;
export default prisma;