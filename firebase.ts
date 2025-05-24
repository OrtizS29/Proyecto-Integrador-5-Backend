import admin from "firebase-admin";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serviceAccount: admin.ServiceAccount;

if (process.env.FIREBASE_CREDENTIALS?.startsWith("{")) {
  // 🔒 En producción (Render), la clave viene como JSON string
  serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} else {
  // 🧪 En desarrollo, es una ruta a un archivo local
  const serviceAccountPath = path.resolve(__dirname, "..", process.env.FIREBASE_CREDENTIALS!);
  serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
