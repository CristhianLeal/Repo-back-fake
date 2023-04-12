import mongoose from "mongoose";

export const dbConect = async () => {
  try{
    // console.log('Servidor de db corriendo en:',process.env.MONGO_CONNECTION) devuelve la Url de conexion
    await mongoose.connect(process.env.MONGO_CONNECTION)
    console.log('Connection satisfactory')
  } catch(error){
    console.log('Failed to connect to mongo')
  }
}

