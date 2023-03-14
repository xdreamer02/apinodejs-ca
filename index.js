import express from 'express';
import certiRoutes from './src/routes/certificado.routes.js'
//import {indexRoutes} from './src/routes/index.routes.js'

const app = express()

//parse body json
app.use(express.json())

//rutas
//app.use(indexRoutes)
app.use('/certiAte/',certiRoutes)
//app.use('dominio',certiRoutes)


app.listen(3500)
console.log('Server running on port 3500')