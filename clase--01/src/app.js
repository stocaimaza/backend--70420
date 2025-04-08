/** CLASE 01 - PROCESS, GLOBAL & CHILD PROCESS **/

//Repasaremos: 

//1) Objeto Process
//2) Manejo de argumentos
//3) Commander JS
//4) Manejo de variables de entorno
//5)  Child Process

//console.log(process); 

//Algunos de los elementos importantes:

console.log(process.cwd()); 
//Directorio actual del proceso. 

console.log(process.pid); 
//Obtengo el id del proceso. 

console.log(process.version);
//Version de Node JS


//process.exit(); 
//Sale del proceso; 

//console.log("Texto adicional");

// MANEJO DE ARGUMENTOS: 

//process.argv = muestra los argumentos pasados por CLI 
console.log(process.argv); 

//LEVANTAMOS UN PEQUEÑIN SERVIDOR: 
import express from "express";
const app = express(); 

import UserModel from "./models/usuarios.model.js";
import configObject from "./config/config.js";
import mongoose from "mongoose";

const {mongo_url} = configObject; 

mongoose.connect(mongo_url)
    .then(() => console.log("Conexión exitosa!"))
    .catch(() => console.log("Vamos a morir, llueve el fin de semana, aumenta la carne"))


//Rutas:

app.get("/", async (req, res) => {
    try {
        const usuarios = await UserModel.find(); 
        res.send(usuarios); 
    } catch (error) {
        res.status(500).send("Error terrible, todo sale, me dedicare al diseño de interiores"); 
    }
})


app.listen(8080, () => console.log(`Escuchando el 8080 FM HIT`)); 