/*
 * Importa el SDK de firebase Admin
 */
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
/*
 * Importa el paquete dotenv
 */
import * as dotenv from "dotenv";
/*
 * Carga el archivo .env
 */
dotenv.config();
/*
 * Verifica si ya se inicializo Firebase y revisa el id, el email y la llave private
 */
if(!getApps().length){
    admin.initializeApp({
        credential:admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
    });
}
/*
 *  Exporta el archivo para ser utilizado en otros archivos.
 */
export default admin;
