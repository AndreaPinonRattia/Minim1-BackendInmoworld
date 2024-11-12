import mongoose, { Schema } from "mongoose";
import { IEtiquetas } from "./model";

export const schema = new Schema<IEtiquetas>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    owner: {type: Schema.Types.ObjectId, ref:'user'},
})

export default mongoose.model('etiquetas',schema)