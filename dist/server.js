"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const brigadaService_js_1 = require("./servicios/brigada/brigadaService.js"); // <- si usas ESModules y "type": "module", añade .js
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Ruta de prueba
app.get("/", (_req, res) => {
    res.send("Hola desde Express con TypeScript!");
});
// Ruta para crear brigada
app.post("/api/brigadas", async (req, res) => {
    const { nombre, municipio } = req.body;
    try {
        await (0, brigadaService_js_1.crearBrigada)(nombre, municipio);
        res.status(201).json({ mensaje: "Brigada creada exitosamente" });
    }
    catch (error) {
        console.error("Error al crear la brigada:", error);
        res.status(500).json({ error: "Error al crear la brigada" });
    }
});
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
