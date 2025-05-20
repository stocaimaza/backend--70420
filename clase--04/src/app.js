//Vamos a testear nuestra APP con una herramienta que se llama ARTILLERY. 

// Instalaremos con npm i artillery -g

import express from "express";
const app = express(); 
const PUERTO = 8080; 

//Rutas 
app.get("/operacionsimple", (req, res) => {
    let suma = 0; 
    for (let i = 0; i < 1000000; i++) {
        suma += i; 
    }
    res.send({suma}); 
}); 

app.get("/operacioncompleja", (req, res) => {
    let suma = 0; 
    for (let i = 0; i < 5e8; i++) {
        suma += i; 
    }
    res.send({suma}); 
})

//Listen
app.listen(PUERTO, () => console.log(`Hoy todo demora`));

//artillery quick --count 40 --num 50 "http://localhost:8080/operacionsimple" -o simple.json

//artillery quick --count 40 --num 50 "http://localhost:8080/operacioncompleja" -o compleja.json
