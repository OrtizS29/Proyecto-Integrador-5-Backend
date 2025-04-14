import express from 'express';
import { crearBrigada } from '../servicios/brigada/brigadaService';

const router = express.Router();

router.post('/brigadas', async (req, res) => {
  const { nombre, municipio } = req.body;

  try {
    await crearBrigada(nombre, municipio);
    res.status(201).json({ mensaje: "Brigada creada exitosamente" });
  } catch (error) {
    console.error("Error al crear brigada:", error);
    res.status(500).json({ error: "Error al crear brigada" });
  }
});

export default router;
