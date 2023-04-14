import User from "../model/User.js"
import bcrypt from 'bcrypt'
import {encryppass} from '../helpers/encryppass.js'

export const getUsers = async (req,res) => {
  const {limit=10,from=0} = req.query //se coloca valor por defecto para evitar el undefined
  // los query son consultas 
  // console.log({limit,from})
  // const users = await User.find({})

  //   .skip(Number(from))
  //   .limit(Number(limit))
  // const total = await User.count()
// forma de ver todo junto y no hacer promesas por separado, ojo que si falla una, fallan todas
  const [users,total] = await Promise.all([

    User.find({})
    .skip(Number(from))
    .limit(Number(limit)),
    User.count()
  ])

  if (users){
    return res.status(200).json ({
      message: "Usuarios retornados exitosamente",
      total,
      users
    })
  }
  res.status(404).json ({
    message: "No hay usuarios",
    data:[]
  })
}

export const getUser = async (req,res) => {
  const {id} = req.params
  // params son los parametros que enviamos en nuestras rutas
  const user = await User.findById(id) //find realiza la busqueda en general y retorna un arreglo, la alternativa perfecta es findbyid
  //verificar que el usuario exista FALTA
  res.json ({
    message: `Usuario con id ${id},retornado exitosamente`,
    user
  })
}

export const postUser = async (req,res) => {
  // console.log(req.body) 
  const {
    email,username,name,password
  } = req.body
  // verificar la info ingresada y valida

  // validar que el nombre de usuario e email sean unicos
  const isExistEmail = await User.findOne({email})
  const isExisteUsername = await User.findOne({username})
  if (isExistEmail){
    return res.status(400).json({
      message:'El correo ya existe'
    })
  }
  if (isExisteUsername){
    return res.status(400).json({
      message:'Username ya existe'
    })
  }
// refactorizar con middlewares

  // guardar en la db DONE

  const user = await User({
    email,username,name,password
  })

  // encriptar la contraseña helper
  user.password= encryppass (password)


  try {
    await user.save()
    res.status(201).json ({
      message: `Usuario ${username} creado`,
    })

  } catch (error) {
    res.status(400).json({
      message:'Ha ocurrido un error',
      fields:{
        email:error.errors?.email?.message,
        username:error.errors?.username?.message,
        password:error.errors?.password?.message,
      }
    })
    // console.log(error) para que el error aparezca por consola
  }

}

export const putUser = (req,res) => {
  res.json ('Editar Usuario desde controllers')
}

export const deleteUser = async (req,res) => {
  const {id} = req.params
  const user = await User.findByIdAndDelete(id)
  // verificar que el usuario exista 
  if (! user){
    return res.status(404).json({
      message:`Usuario: no existente`
    })
  }
  res.json ({
    message: `Usuario: ${user?.username} eliminado con exito`
    })

}
