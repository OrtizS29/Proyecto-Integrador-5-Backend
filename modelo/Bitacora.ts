export interface Bitacora {
    id: number;
    Fecha: Date;        // Podrías usar Date si manejas objetos Date en formato 'YYYY-MM-DD'
    Hora: string;         // Puede mantenerse como string si viene en formato 'HH:mm:ss'
    Actividad: string;
    Informacion: string;
    Tipo_Informe: string;
    IdBrigada: number;    // FK hacia Brigada.id
}