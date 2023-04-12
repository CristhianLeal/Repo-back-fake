import express from 'express'
// import { userRoutes } from '../source/routes/users.routes.js'
// import { productRoutes } from '../source/routes/products.routes.js'
import { productRoutes,userRoutes} from '../source/routes/index.js'
import cors from 'cors'
import { dbConect } from './db/configdb.js'

export class Server {

  //propiedades
  constructor (){
    this.app = express()
    this.middlewares()
    this.routes()
    this.connectionDb()
  }

  //metodos
  async connectionDb(){
    await dbConect()
  }
  // con esto quiere decir que la cominucación tiene que estar en formato json
  middlewares(){
    this.app.use(express.json())

    // CORS
    this.app.use(cors())
  }

  routes(){
    this.app.use('/api/users',userRoutes)
    this.app.use ('/api/prods',productRoutes)
  }

  listen (){
    this.app.listen(8080, ()=> {
      console.log('servidor corriendo en puerto 8080')
    })
  }
}

