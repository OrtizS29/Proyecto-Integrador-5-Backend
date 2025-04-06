/*
 *  Aqui se inicializa el backend es como un boton de encendido para el backend
 */

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/,", (_req,res) => {
    res.send('Hola desde Express con TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });