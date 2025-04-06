
import pool from "./conexionBDNeon.js";

(async () => {
    try {
      const res = await pool.query('SELECT NOW()');
      console.log('🟢 Conectado exitosamente:', res.rows[0]);
    } catch (err) {
      console.error('🔴 Error al conectar:', err);
    }
  })();