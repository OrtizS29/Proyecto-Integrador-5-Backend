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
import excelRoutes from "./Routes/excelRoutes.ts";
import municipioRoutes from "./Routes/municipioRoutes.ts";
import conglomeradoRoutes from "./Routes/conglomeradoRoutes.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/*
 * MiDdleware para permitir solicitudes HTTP desde Angular
 */
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:4200',
      'https://proyecto-integrador-5-frontend.vercel.app'
    ];

    if(!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")){
      callback(null,true)
    }else{
      callback(new Error("Cors no permite"))
    }
  },
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
 * Aquí se montan las rutas para subir el archivo
 */
app.use("/api/importar",excelRoutes);

/*
 * Aquí se montan las rutas enviar los conglomerados
 */
app.use("/api/conglomerado",conglomeradoRoutes);

/*
 * Aquí se montan las rutas enviar los municipios
 */
app.use("/api/municipio",municipioRoutes);

/*
 * Escribe un texto plano
 */
app.get("/", (_req,res) => {
    res.send('Hola desde Express con TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });