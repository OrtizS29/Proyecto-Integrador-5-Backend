import { Request, Response } from "express";
import { importarBrigadistasDesdeExcel } from "../servicios/brigadistaImportService.ts";
import { Multer } from "multer";

export const importarDesdeExcelController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No se subió ningún archivo." });
      return;
    }

    console.log("Archivo recibido:", req.file.path);

    const correosNuevos = await importarBrigadistasDesdeExcel(req.file.path);

    console.log("Correos que se van a enviar:", correosNuevos);

    res.status(200).json({ 
      message: "Importación completada.",
      correos: correosNuevos, 
    });
  } catch (error) {
    console.error("Error al importar desde Excel:", error);
    res.status(500).json({
      error: "Error al procesar el archivo.",
      detalle: error instanceof Error ? error.message : error,
    });
  }
};
