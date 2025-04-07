/*
 *  Aqui se inicializa el backend es como un boton de encendido para el backend
 */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usuarioRoutes from "./Routes/usuarioRoutes.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
/*
 * MiDdleware para permitir solicitudes HTTP desde Angular
 */
app.use(cors({
    origin: 'http://localhost:4300',
    credentials: true
  }));
/*
 *  Middleware para parsear JSON 
 */
app.use(express.json());
/*
 * Punt base para las rutas API REST
 */
app.use("/api", usuarioRoutes);
/*
 * Escribe un texto plano
 */
app.get("/", (_req,res) => {
    res.send('Hola desde Express con TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });