// import axios from 'axios';
// import prisma from './prisma.ts';
// import dotenv from 'dotenv';

// dotenv.config();

// const EMAILJS_API_URL = process.env.EMAILJS_API_URL!;
// const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
// const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID!;
// const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY!;

// export const notificarBrigadaPorId  = async (brigadaId: number): Promise<string[]> => {
//   const brigada = await prisma.brigada.findUnique({
//     where: { id: brigadaId },
//     include: { Brigadista: true }
//   });

//   if (!brigada) throw new Error('Brigada no encontrada');

//   const notificados: string[] = [];

//   for (const brigadista of brigada.Brigadista) {
//     await axios.post(EMAILJS_API_URL, {
//       service_id: EMAILJS_SERVICE_ID,
//       template_id: EMAILJS_TEMPLATE_ID,
//       user_id: EMAILJS_PUBLIC_KEY,
//       template_params: {
//         nombre: brigadista.Nombre,
//         to_email: brigadista.Correo_Electronico,
//         brigada_nombre: brigada.Nombre 
//       }
//     });

//     notificados.push(brigadista.Correo_Electronico);
//   }

//   return notificados;
// };