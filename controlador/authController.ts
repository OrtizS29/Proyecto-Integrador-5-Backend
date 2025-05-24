
import { Request, Response } from "express";
import admin from "../firebase.ts";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response): Promise<void> => {
  const { token } = req.body;
  if (!token) {
    res.status(400).json({ error: "Token no proporcionado" });
    return;
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    const firebaseUid = decoded.uid ?? decoded.sub!;
    const now = new Date();

    const user = await prisma.user.upsert({
      where: { FirebaseUid: firebaseUid },
      update: {
        Nombre: decoded.name ?? "Usuario sin nombre",
        Email: decoded.email ?? "sin-email@dominio.com",
        updatedAt: now,
      },
      create: {
        FirebaseUid: firebaseUid,
        Nombre: decoded.name ?? "Usuario sin nombre",
        Email: decoded.email ?? "sin-email@dominio.com",
        createdAt: now,
        updatedAt: now,
      },
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error verificando el token:", error);
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};
