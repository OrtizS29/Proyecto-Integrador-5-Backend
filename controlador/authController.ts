
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
    const email =decoded.email ?? "sin-email@dominio.com";

    // 1. Buscar si ya existe el usuario en la tabla de usuarios
    const userExistente = await prisma.user.findUnique({
      where: { FirebaseUid: firebaseUid }
    });

    // 2. Si existe como admin, omitir validación de brigadista
    if (userExistente?.Roll === "admin") {
      res.status(200).json({ success: true, user: userExistente });
      return;
    }

    //validar que el brigadista este en la base de datos
    const existeBrigadista = await prisma.brigadista.findFirst({
      where: { Correo_Electronico: email }
    });

    console.log(existeBrigadista);

    if (!existeBrigadista) {
      res.status(403).json({error: "Tu cuenta aun no esta habilitada"})
      return;
    }

    if(existeBrigadista.UserID){
      const userVinculado = await prisma.user.findUnique({where: { id: existeBrigadista.UserID}});

      if (userVinculado && userVinculado.FirebaseUid !== firebaseUid) {
        res.status(409).json({ error: "Este brigadista ya está vinculado a otra cuenta." });
        return;
      }
    }

    const user = await prisma.user.upsert({
      where: { FirebaseUid: firebaseUid },
      update: {
        Nombre: decoded.name ?? "Usuario sin nombre",
        Email: email,
        updatedAt: now,
      },
      create: {
        FirebaseUid: firebaseUid,
        Nombre: decoded.name ?? "Usuario sin nombre",
        Email: email,
        createdAt: now,
        updatedAt: now,
        Roll: "brigadista"
      },
    });

    if (!existeBrigadista.UserID) {
      console.log("Actualizando brigadista con nuevo UserID");
      await prisma.brigadista.update({
        where: { Numero_Documento: existeBrigadista.Numero_Documento },
        data: { UserID: user.id }
      });
    }

    const userConBrigadista = await prisma.user.findUnique({
      where: { id: user.id },
      include: { Brigadista: true }
    });

    console.log(userConBrigadista);

    res.status(200).json({ success: true, user: userConBrigadista });
  } catch (error: any) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error interno del servidor", details: error.message });
  }
};
