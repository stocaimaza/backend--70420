import { Router } from "express";
const router = Router(); 
import generarUsuarios from "../utils/util.js";

router.get("/", (req, res) => {
    //Generamos un array de usuarios: 

    const usuarios = []; 

    for(let i = 0; i < 5; i++) {
        usuarios.push(generarUsuarios()); 
    }
    res.json(usuarios); 
})

export default router; 