"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearBrigada = void 0;
const conexionBDNeon_1 = __importDefault(require("../conexion/conexionBDNeon"));
const crearBrigada = async (nombre, municipio) => {
    const query = `CALL crear_brigada($1, $2)`;
    await conexionBDNeon_1.default.query(query, [nombre, municipio]);
};
exports.crearBrigada = crearBrigada;
