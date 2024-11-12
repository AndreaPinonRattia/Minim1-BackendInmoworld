import { Request, Response } from 'express';
import { IEtiquetas } from '../etiquetas/model';
import * as etiquetasServices from '../etiquetas/service';

export class etiquetasController {
    
    public async create(req: Request, res: Response) {
        try {
            if (req.body.name && req.body.price) {
                const etiquetas_params: IEtiquetas = {
                    name: req.body.name,
                    price: req.body.price,
                    owner: req.body.owner 
                };
                const etiquetas_data = await etiquetasServices.getEntries.create(etiquetas_params);
                return res.status(201).json({ message: 'Etiqueta creada exitosamente', etiquetas: etiquetas_data });
            } else {
                return res.status(400).json({ error: 'Campos faltantes' });
            }
        } catch (error) {
            console.error('Error al crear la etiqueta:', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const etiquetas_data = await etiquetasServices.getEntries.getAll();
            const total = etiquetas_data.length;
            const page = Number(req.params.page) || 1;
            const limit = Number(req.params.limit) || total; 

            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const totalPages = Math.ceil(total / limit);

            const resultEtiquetas = etiquetas_data.slice(startIndex, endIndex);

            return res.status(200).json({ etiquetas: resultEtiquetas, totalPages, totalEtiquetas: total });
        } catch (error) {
            console.error('Error en la solicitud:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    public async getEtiquetaByUser(req: Request, res: Response) {
        try {
            const { userId, etiquetaId } = req.params; // Obtener los dos parámetros de la URL
            const etiqueta = await etiquetasServices.getEntries.getEtiquetaByUser(userId, etiquetaId);
            return res.status(200).json(etiqueta); // Responder con la etiqueta encontrada
        } catch (error) {
            console.error('Error al obtener la etiqueta del usuario:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const etiquetas_data = await etiquetasServices.getEntries.update(id, req.body);
            return res.status(200).json(etiquetas_data);
        } catch (error) {
            console.error('Error al actualizar la etiqueta:', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const etiquetas_data = await etiquetasServices.getEntries.delete(id);
            return res.status(200).json(etiquetas_data);
        } catch (error) {
            console.error('Error al eliminar la etiqueta:', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}
