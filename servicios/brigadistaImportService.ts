
import prisma from './prisma.ts';
import { BrigadistaExcel, TituloExcel, ContactoExcel } from '../tipos/excelTypes.ts';  // Asegúrate de importar las interfaces correctas
import { parseExcel } from './excelService.ts';  // Asegúrate de importar la función que parsea el Excel

export const importarBrigadistasDesdeExcel = async (filePath: string) => {
    // Parsear el archivo Excel con la función parseExcel
    const { brigadistasSheet, titulosSheet, contactosSheet } = parseExcel(filePath);
  
    // Tipado explícito (aunque ya está implícito por la función parseExcel)
    const brigadistas = brigadistasSheet;  // Tipo ya inferido como BrigadistaExcel[]
    const titulos = titulosSheet;  // Tipo ya inferido como TituloExcel[]
    const contactos = contactosSheet;  // Tipo ya inferido como ContactoExcel[]
  
    // Ahora puedes proceder a trabajar con los datos y mapearlos como antes
    for (const b of brigadistas) {
      const doc = b.Numero_Documento;
  
      await prisma.brigadista.create({
        data: {
          Numero_Documento: doc,
          Nombre: b.Nombre,
          Apellido: b.Apellido,
          Tipo_Documento: b.Tipo_Documento,
          Pais_Expedicion_Documento: b.Pais_Expedicion_Documento,
          Municipio_Expedicion_Documento: b.Municipio_Expedicion_Documento,
          Fecha_Expedicion_Documento: new Date(b.Fecha_Expedicion_Documento),
          Pais_Nacimiento: b.Pais_Nacimiento,
          Fecha_Nacimiento: new Date(b.Fecha_Nacimiento),
          Grupo_Sanguineo: b.Grupo_Sanguineo,
          Rh: b.Rh,
          Sexo: b.Sexo,
          Estado_Civil: b.Estado_Civil,
          Telefono_Movil: b.Telefono_Movil.toString(),  // Asegúrate de que sea string si es necesario
          Correo_Electronico: b.Correo_Electronico,
          Talla_Zapato: b.Talla_Zapato,
          Peso: b.Peso,
          Altura: b.Altura,
          Ciudad_Recidencia: b.Ciudad_Recidencia,
          Direccion: b.Direccion,
          Profesion: b.Profesion,
          Disponibilidad: b.Disponibilidad,
          Estado: b.Estado,
          Id_Brigada: b.Id_Brigada,
          Cargo: b.Cargo,
  
          // Crear Contactos de Emergencia
          Contacto_Emergencia: {
            create: contactos
              .filter((c) => c.Doc_Brigadista === doc)
              .map((c) => ({
                Nombre_Completo: c.Nombre_Completo,
                Parentesco: c.Parentesco,
                Telefono_Movil: c.Telefono_Movil,
                Correo_Electronico: c.Correo_Electronico,
              })),
          },
  
          // Crear Titulos
          Titulos: {
            create: titulos
              .filter((t) => t.Doc_Brigadista === doc)
              .map((t) => ({
                Titulo: t.Titulo,
                Nivel_Escolaridad: t.Nivel_Escolaridad,
              })),
          },
        },
      });
    }
  };
