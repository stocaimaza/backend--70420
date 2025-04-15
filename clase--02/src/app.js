import express from "express";
const app = express(); 
const PUERTO = 8080;
import usuariosRouter from "./routes/usuarios.router.js"; 
import compression from "express-compression";

//Middleware: 
app.use(compression({
    brotli: {
        enabled: true, 
        zlib: {}
    }
})); 

//Rutas
//app.use("/api/users", usuariosRouter); 

//PRACTICAMOS COMPRESIÓN: 

app.get("/", (req, res) => {
    let string = "Hola comision, somos programadores y no sabemos arreglar impresoras"; 

    for( let i = 0; i < 5e4 ; i++ ) {
        string += "Hola comision, somos programadores y no sabemos arreglar impresoras"; 
    }

    res.send(string); 
})

//Sin compresión: 3.4 mb
//Con compresión con gzip: 11.8 kb
//Con Brotli: 359 bytes







app.listen(PUERTO, () => {
    console.log(`Esuchando en el puerto ${PUERTO}`); 
})