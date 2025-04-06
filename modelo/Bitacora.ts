export interface Bitacora {
    id: number;
    Fecha: string;        // Podrías usar Date si manejas objetos Date
    Hora: string;         // Puede mantenerse como string si viene en formato 'HH:mm:ss'
    Actividad: string;
    Informacion: string;
    Tipo_Informe: string;
    IdBrigada: number;    // FK hacia Brigada.id
}