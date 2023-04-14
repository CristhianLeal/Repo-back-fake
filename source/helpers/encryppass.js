import bcrypt from 'bcrypt'
export const encryppass = (password)=> {
  const salt = bcrypt.genSaltSync() //sabe internamente que el enumero de vuetlas es 10
  const hash = bcrypt.hashSync(password,salt) //comentando esta 
  return hash //comentando esta 

  //  return bcrypt.hashSync(password,salt)
}