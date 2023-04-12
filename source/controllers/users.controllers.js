export const getUsers = (req,res) => {
  res.json ('Obtener Usuarios desde controllers')
}
export const getUser = (req,res) => {
  const {id} = req.params
  res.json (`Usuario con id ${id},retornado exitosamente`)
}
export const postUser = (req,res) => {
  console.log(req.body)
  const data = req.body
  // verificar la info ingresada y valida
  // guardar en la db
  res.status(201).json ({
    message: `Usuario ${data.username} creado`,
    data
  })
}
export const putUser = (req,res) => {
  res.json ('Editar Usuario desde controllers')
}
export const deleteUser = (req,res) => {
  res.json ('Eliminar Usuario desde controllers')
}