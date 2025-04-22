import { Request, Response } from 'express';
import { notificarBrigadaPorId  } from '../servicios/correoService.ts';

export const notificarBrigada = async (req: Request, res: Response) => {
  try {
    const brigadaId = parseInt(req.params.id);
    const notificados = await notificarBrigadaPorId (brigadaId);

    res.status(200).json({ message: 'Notificaciones enviadas', notificados });

  } catch (error: any) {
    console.error('Error al notificar:', error.message);
    res.status(error.message === 'Brigada no encontrada' ? 404 : 500).json({
      message: 'Error enviando notificaciones',
      error: error.message
    });
  }
};