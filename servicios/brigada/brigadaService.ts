import pool from "../conexion/conexionBDNeon";

export const crearBrigada = async (nombre: string, municipio: string): Promise<void> => {
    const query = `CALL crear_brigada($1, $2)`;
await pool.query(query, [nombre, municipio]);

};
