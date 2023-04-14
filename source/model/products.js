// Crear un modelo/esquema de usuario
import {model, Schema } from "mongoose";

const ProductSchema = new Schema ({
  description:{
    type:String,
    required:[true,"La descripción del producto es obligatoria"]
  },
  name:{
    type:String,
    required:[true,"El nombre del producto es obligatoria"]
  },
  price:{
    type:Number,
    required:[true,"El precio es obligatorio"]
  },
})

export default model('Pruduct', ProductSchema)
// definimos y exportamos el modelo que tendran los usuarios