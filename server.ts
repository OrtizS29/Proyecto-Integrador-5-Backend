// server.ts
import express from "express";
import dotenv from "dotenv";
import { crearBrigada } from "./servicios/brigada/brigadaService.js"; // <- si usas ESModules y "type": "module", añade .js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta de prueba
app.get("/", (_req, res) => {
  res.send("Hola desde Express con TypeScript!");
});

// Ruta para crear brigada
app.post("/api/brigadas", async (req, res) => {
  const { nombre, municipio } = req.body;

  try {
    await crearBrigada(nombre, municipio);
    res.status(201).json({ mensaje: "Brigada creada exitosamente" });
  } catch (error) {
    console.error("Error al crear la brigada:", error);
    res.status(500).json({ error: "Error al crear la brigada" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
