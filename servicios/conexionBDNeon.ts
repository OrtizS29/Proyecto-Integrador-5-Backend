/*
 *  Se importa desde el paquete de pg que se instaló, 
 *  pg es el cliente de postgresql para node.js,
 *  Pool es una clase que permite reutilizar conexiones, osea es un grupo de conexiones.
 */
import pkg from 'pg';
/*
 * Importa el paquete dotenv y config lee el archivo .env donde esta las rutas o contraseñas
 * de la DB.
 */
import dotenv from 'dotenv';
const { Pool } = pkg;
/* 
 *   Carga el archivo .env con las rutas y lo deja en process.
 */
dotenv.config();

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
export default pool;
