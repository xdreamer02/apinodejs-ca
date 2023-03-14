import {createPool} from 'mysql2/promise'

/*PRODUCCION */
export const pool =createPool({
    host:'localhost',
    user:'gti001_certificados_app1',
    password:'soporte2020',
    database:'gti001_certificados_app'
})



/*DB LOCAL----*/
// export const pool =createPool({
//     host:'localhost',
//     user:'root',
//     password:'soportemda',
//     port:'3306',
//     database:'certiAte'
// })