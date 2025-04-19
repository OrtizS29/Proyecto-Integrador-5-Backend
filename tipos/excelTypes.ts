
export interface BrigadistaExcel {
    Numero_Documento: number;
    Nombre: string;
    Apellido: string;
    Tipo_Documento: string;
    Pais_Expedicion_Documento: string;
    Municipio_Expedicion_Documento: string;
    Fecha_Expedicion_Documento: string;
    Pais_Nacimiento: string;
    Fecha_Nacimiento: string;
    Grupo_Sanguineo: string;
    Rh: string;
    Sexo: string;
    Estado_Civil: string;
    Telefono_Movil: number;
    Correo_Electronico: string;
    Talla_Zapato: string;
    Peso: string;
    Altura: string;
    Ciudad_Recidencia: string;
    Direccion: string;
    Profesion: string;
    Disponibilidad: string;
    Estado: string;
    Id_Brigada?: number;
}
  
export interface TituloExcel {
    Doc_Brigadista: number;  // Usamos 'Doc_Brigadista' ya que es el nombre correcto en el modelo
    Titulo: string;
    Nivel_Escolaridad: string;
}
  
  export interface ContactoExcel {
    Doc_Brigadista: number;  // También 'Doc_Brigadista' en lugar de 'Brigadista_Documento'
    Nombre_Completo: string;
    Telefono_Movil: string;
    Correo_Electronico: string;
    Parentesco: string;
}