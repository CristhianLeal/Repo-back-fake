import User from "../model/User.js"

export const getUsers = async (req,res) => {
  const {limit=10,from=0} = req.query //se coloca valor por defecto para evitar el undefined
  console.log({limit,from})
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
export const getUser = (req,res) => {
  const {id} = req.params
  res.json (`Usuario con id ${id},retornado exitosamente`)
}
export const postUser = async (req,res) => {
  console.log(req.body)
  const {
    email,username,name,password
  } = req.body
  // verificar la info ingresada y valida
  // guardar en la db DONE

  const user = await User({
    email,username,name,password
  })
  // encriptar la contraseña
  try {
    user.save()
    res.status(201).json ({
      message: `Usuario ${username} creado`,
    })

  } catch (error) {
    res.status(500).json({
      message:'Ha ocurrido un error'
    })
    console.log(error)
  }

}
export const putUser = (req,res) => {
  res.json ('Editar Usuario desde controllers')
}
export const deleteUser = (req,res) => {
  res.json ('Eliminar Usuario desde controllers')
}
