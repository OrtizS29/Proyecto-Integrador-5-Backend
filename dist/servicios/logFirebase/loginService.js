"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarUsuarios = exports.eliminarUsuario = exports.actualizarUsuario = exports.obtenerUsuarioPorEmail = exports.crearUsuario = void 0;
const firebase_1 = __importDefault(require("./firebase"));
const crearUsuario = (email, password) => firebase_1.default.auth().createUser({ email, password });
exports.crearUsuario = crearUsuario;
const obtenerUsuarioPorEmail = (email) => firebase_1.default.auth().getUserByEmail(email);
exports.obtenerUsuarioPorEmail = obtenerUsuarioPorEmail;
const actualizarUsuario = (uid, datos) => firebase_1.default.auth().updateUser(uid, datos);
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (uid) => firebase_1.default.auth().deleteUser(uid);
exports.eliminarUsuario = eliminarUsuario;
const listarUsuarios = async () => {
    const lista = await firebase_1.default.auth().listUsers(1000);
    return lista.users;
};
exports.listarUsuarios = listarUsuarios;
