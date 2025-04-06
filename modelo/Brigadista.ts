export interface Brigadista {
    Cedula: number;
    Nombre: string;
    Apellido: string;
    Cargo: string;
    Correo: string;
    Telefono: string;
    Direccion: string;
    IdBrigada: number; // FK hacia Brigada.id
}