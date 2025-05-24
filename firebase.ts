import admin from "firebase-admin";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serviceAccount;

if (process.env.FIREBASE_CREDENTIALS_B64) {
  // En Render: decodificar Base64 y parsear JSON
  const firebaseCredsJson = Buffer.from(process.env.FIREBASE_CREDENTIALS_B64, "base64").toString("utf-8");
  serviceAccount = JSON.parse(firebaseCredsJson);
} else {
  // En local: leer archivo JSON normalmente
  const serviceAccountPath = path.resolve(__dirname, "..", process.env.FIREBASE_CREDENTIALS!);
  const serviceAccountRaw = fs.readFileSync(serviceAccountPath, "utf-8");
  serviceAccount = JSON.parse(serviceAccountRaw);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
