// Crear un modelo/esquema de usuario
import {model, Schema } from "mongoose";

const UserSchema = new Schema ({
  email:{
    type: String,
    required:[true,"El correo es obligatorio"]
  },
  username:{
    type:String,
    required:[true,"El nombre de usuario es obligatorio"]
  },
  name:{
    type:String,
  },
  password:{
    type:String,
    required:[true,"la clave es obligatoria"]
  },
})

export default model('User', UserSchema)
// definimos y exportamos el modelo que tendran los usuarios