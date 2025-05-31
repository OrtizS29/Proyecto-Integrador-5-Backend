
import { Request, Response } from "express";
import { crearAdminMunicipal } from "../servicios/crearAdminService.ts";

export const crearAdmin = async (req: Request, res: Response): Promise<void> => {
  const { email, password, nombre } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email y contraseña son obligatorios" });
    return;
  }

  try {
    const user = await crearAdminMunicipal(email, password, nombre);
    res.status(201).json({ success: true, user });
  } catch (error: any) {
    console.error("Error creando admin:", error);
    res.status(500).json({ error: "No se pudo crear el administrador", detalle: error.message });
  }
};
