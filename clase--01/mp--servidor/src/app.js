// npm i express cors mercadopago

import express from "express"; 
import cors from "cors";
const app = express(); 
const PUERTO = 8080; 

import { MercadoPagoConfig, Preference } from "mercadopago"; 

const client = new MercadoPagoConfig({accessToken: "APP_USR-2322987128104362-040721-e608f5fb6f57e3fb8db57951262e1f05-2002752925"}); 

//Middleware
app.use(express.json()); 
app.use(cors()); 

app.post("/create-preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title, 
                    quantity: Number(req.body.quantity), 
                    unit_price: Number(req.body.quantity), 
                    currency_id: "ARS"
                }
            ], 
            back_urls: {
                success: "https://www.mercadolibre.com.ar/", 
                failure: "https://www.mercadolibre.com.ar/", 
                pending: "https://www.mercadolibre.com.ar/"
            }, 
            auto_return: "approved",
        }; 

        const preference = new Preference(client); 
        const result = await preference.create({body}); 

        //Se lo enviamos al front: 
        res.json({
            id:result.id
        })
    } catch (error) {
        console.log(error);
        res.send("Error mortal");
    }
})

app.listen(PUERTO, () => {
    console.log(` Escuchando desde el puerto de Mar del Plataa`);
})