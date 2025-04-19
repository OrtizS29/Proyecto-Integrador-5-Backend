import { Router } from "express";
import multer, { FileFilterCallback } from "multer";
import { importarDesdeExcelController } from "../controlador/excelController.ts";

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/"); // Carpeta donde se guardan los archivos
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Nombre único para el archivo
  },
});

// Middleware multer
const upload = multer({
  storage: storage,
  fileFilter: (_req, file, cb: FileFilterCallback) => {
    if (file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      cb(null, true); // Permite el archivo Excel
    } else {
      cb(null, false); // Rechaza archivos que no sean Excel
    }
  },
});

// Router
const router = Router();

// Ruta de importación
router.post("/", upload.single("file"), importarDesdeExcelController); // Subida de un solo archivo

export default router;
