import { Types } from 'mongoose';
import etiquetas from './schema';

export const getEntries = {
    getAll: async()=>{
    return await etiquetas.find();
    },
    getEtiquetaByUser: async (userId: string, etiquetaId: string) => {
        try {
            if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(etiquetaId)) {
                throw new Error('El ID de usuario o etiqueta no es válido');
            }
            const etiqueta = await etiquetas.findOne({ _id: etiquetaId, owner: userId }).populate('owner');
            if (!etiqueta) {
                throw new Error('Etiqueta no encontrada');
            }
            return etiqueta;
        } catch (error) {
            console.error('Error al obtener la etiqueta:', error);
            throw error;
        }
    },
    create: async(entry:object)=>{
        return await etiquetas.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await etiquetas.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await etiquetas.findByIdAndDelete(id);
    }
}