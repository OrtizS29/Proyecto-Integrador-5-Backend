/*
 * Importa la instala de admin para trabajar con FiresBase Admin SDK
 */
import admin from "./firebase";

/**
 * Funcion que crea un usuario en fire base Autehntication
 * @param email 
 * @param password 
 * @returns 
 */
export const crearUsuario = (email: string, password: string) => {
  admin.auth().createUser({ email, password });
}
/**
 * Funcion que optiene el usuario por su correo registrado
 * @param email 
 * @returns 
 */
export const obtenerUsuarioPorEmail = (email: string) => {
  admin.auth().getUserByEmail(email);
}
/**
 * Funcion que actualiza los datos de un usuario de FireBase
 * @param uid 
 * @param datos 
 * @returns 
 */
export const actualizarUsuario = (uid: string, datos: any) => {
  admin.auth().updateUser(uid, datos);
}
/**
 * Funcion que elimina el usuario de FireBase
 * @param uid 
 * @returns 
 */
export const eliminarUsuario = (uid: string) => {
  admin.auth().deleteUser(uid);
}

/**
 * 
 * @param email 
 * @returns 
 */
export const buscarUsuarioEmail = (email: string) => {
  return admin.auth().getUserByEmail(email);
}

/**
 * Funcion asincronica que optiene hasta 1000 usuarios registrados y retorna array
 * @returns 
 */
export const listarUsuarios = async () => {
  const lista = await admin.auth().listUsers(1000);
  return lista.users;
};

