import mongoose, { ObjectId } from "mongoose"

export interface IEtiquetas{
    name: string,
    price: number,
    owner: ObjectId 
}