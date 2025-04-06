
import admin from "./firebase";

export const crearUsuario = (email: string, password: string) =>
  admin.auth().createUser({ email, password });

export const obtenerUsuarioPorEmail = (email: string) =>
  admin.auth().getUserByEmail(email);

export const actualizarUsuario = (uid: string, datos: any) =>
  admin.auth().updateUser(uid, datos);

export const eliminarUsuario = (uid: string) =>
  admin.auth().deleteUser(uid);

export const listarUsuarios = async () => {
  const lista = await admin.auth().listUsers(1000);
  return lista.users;
};

