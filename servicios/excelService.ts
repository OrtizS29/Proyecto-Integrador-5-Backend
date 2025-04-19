
import * as XLSX from 'xlsx';
import { BrigadistaExcel, TituloExcel, ContactoExcel } from '../tipos/excelTypes.ts'; 

export const parseExcel = (filePath: string) => {
    const workbook = XLSX.readFile(filePath);
  
    const brigadistasSheet: BrigadistaExcel[] = XLSX.utils.sheet_to_json(workbook.Sheets['Brigadistas']);
    const titulosSheet: TituloExcel[] = XLSX.utils.sheet_to_json(workbook.Sheets['Titulos']);
    const contactosSheet: ContactoExcel[] = XLSX.utils.sheet_to_json(workbook.Sheets['Contactos']);
  
  
    return { brigadistasSheet, titulosSheet, contactosSheet };
};