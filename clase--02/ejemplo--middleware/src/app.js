/** CLASE 2 - OPTIMIZACION **/

//1) Compresión. 
//2) Manejo personalizado de errores. 

//MI PEQUEÑO SERVIDOR: 

import express from "express"; 
const app = express(); 
const PUERTO = 8080; 
import compression from "express-compression"; 
import usuariosRouter from "./routes/usuarios.router.js";
import manejadorError from "./middleware/error.js";

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    }
})); 

//Rutas: 

// app.get("/", (req, res) => {
//     let string = "Hola comision, somos programadores y no sabemos arreglar impresoras"; 

//     for(let i = 0; i < 5e4; i++) {
//         string += "Hola comision, somos programadores y no sabemos arreglar impresoras"; 
//     }

//     res.send(string); 
// })

app.use("/usuarios", usuariosRouter);
app.use(manejadorError);

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto de Mar del Plata, junto con la gente de Aldosivi"); 
})

//Sin compresión: 3.4 mb
//Con compresion: 11.8 kb
//Con Brotli: 359 bytes

//Middleware para el manejo de errores: 
//Vamos a desarrollar  nuestra propia gestión interna de errores. 
//Y para lograr esto necesitamos 3 cosas: 

//1) Un middleware de recepción de errores. 
//2) Un generador personalizado de errores. 
//3) Un diccionario de errores. 