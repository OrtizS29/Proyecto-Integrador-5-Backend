/*
 *  Aqui se inicializa el backend es como un boton de encendido para el backend
 */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import brigadaRoutes from "./Routes/brigadaRoutes.ts";
import contactEmerRoutes from "./Routes/contactEmerRoutes.ts";
import novedadRoutes from "./Routes/novedadRoutes.ts";
import brigadistaRoutes from "./Routes/brigadistaRoutes.ts";
import tituloRoutes from "./Routes/tituloRoutes.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
/*
 * MiDdleware para permitir solicitudes HTTP desde Angular
 */
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));
/*
 *  Middleware para parsear JSON 
 */
app.use(express.json());

/*
 * Aquí se montan las rutas reales Brigada
 */
app.use("/api/brigadas", brigadaRoutes);


/*
 * Aquí se montan las rutas reales de Brigadistas
 */
app.use("/api/brigadistas", brigadistaRoutes);


/*
 * Aquí se montan las rutas reales Contacto Emergencia
 */
app.use("/api/contactEmer", contactEmerRoutes);

/*
 * Aquí se montan las rutas reales Novedad
 */
app.use("/api/novedades", novedadRoutes);


/*
 * Aquí se montan las rutas reales Titulos
 */
app.use("/api/titulos", tituloRoutes);

/*
 * Escribe un texto plano
 */
app.get("/", (_req,res) => {
    res.send('Hola desde Express con TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });