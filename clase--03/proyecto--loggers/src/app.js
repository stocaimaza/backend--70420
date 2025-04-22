import express from "express"; 
const app = express(); 
const PUERTO = 8080;
import { addLogger } from "./utils/logger.js";

//Middleware
app.use(addLogger); 

//Rutas

app.get("/", (req, res) => {
    req.logger.error("Error fatal, vamos re morir ahhh!"); 
    req.logger.warn("Esto es un warning, todavia no vamos a morir pero atentis"); 
    res.send("Olis, ke asen? "); 
});

//Ruta para probar todos los loggers: 

app.get("/loggertest", (req, res) => {
    req.logger.error("Error fatal");
    req.logger.debug("Mensaje de debug");
    req.logger.info("Mensaje informativo");
    req.logger.warning("Warning!!");

    res.send("Test de logger"); 
})

app.listen(PUERTO, () => console.log(`Escuchando en el puerto de Mar del Plata`));