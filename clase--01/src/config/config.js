//DOTENV es una libreria que nos permite setear un archivo .env y configurar variables de entorno. 

//npm i dotenv

import dotenv from "dotenv"; 
import program from "../utils/commander.js"; 

const { mode } = program.opts(); 

dotenv.config({
    path: mode === "desarrollo" ? "./.env.desarrollo" : "./.env.produccion"
})

let configObject = {
    mongo_url: process.env.MONGO_URL
}

export default configObject; 