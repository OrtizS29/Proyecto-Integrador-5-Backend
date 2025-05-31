
import { getAuth } from "firebase-admin/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function crearAdminMunicipal(email: string, password: string, nombre?: string) {
  const auth = getAuth();

  // 1. Crear en Firebase
  const usuarioFirebase = await auth.createUser({
    email,
    password,
    displayName: nombre || "Admin Municipal",
  });

  const now = new Date();

  // 2. Guardar en base de datos local (tabla User)
  const user = await prisma.user.create({
    data: {
      FirebaseUid: usuarioFirebase.uid,
      Email: email,
      Nombre: nombre,
      createdAt: now,
      updatedAt: now,
      Roll: "admin",
    },
  });

  return user;
}