"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBDNeon_js_1 = __importDefault(require("./conexionBDNeon.js"));
(async () => {
    try {
        const res = await conexionBDNeon_js_1.default.query('SELECT NOW()');
        console.log('🟢 Conectado exitosamente:', res.rows[0]);
    }
    catch (err) {
        console.error('🔴 Error al conectar:', err);
    }
})();
