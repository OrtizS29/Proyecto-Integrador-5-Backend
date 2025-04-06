"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *  Se importa desde el paquete de pg que se instaló,
 *  pg es el cliente de postgresql para node.js,
 *  Pool es una clase que permite reutilizar conexiones, osea es un grupo de conexiones.
 */
const pg_1 = __importDefault(require("pg"));
/*
 * Importa el paquete dotenv y config lee el archivo .env donde esta las rutas o contraseñas
 * de la DB.
 */
const dotenv_1 = __importDefault(require("dotenv"));
const { Pool } = pg_1.default;
/*
 *   Carga el archivo .env con las rutas y lo deja en process.
 */
dotenv_1.default.config();
/*
 *  Procedemos a crear una nueva conexion en la base de datos con Pool
 */
const pool = new Pool({
    /*
     *  Ponemos en variable y usamos la variable del .env de la ruta de la DB.
     */
    connectionString: process.env.DATABASE_URL,
    /*
     *  Esto permite conectar a servicios como Vercel o neon sin problemas de
     *  certificacion ssl.
     */
    ssl: {
        rejectUnauthorized: false
    }
});
/*
 *  Exportamosla conexion para ser utilizado en otros archivos.
 */
exports.default = pool;
