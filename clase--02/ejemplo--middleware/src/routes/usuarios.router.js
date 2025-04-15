import { Router } from "express";
import CustomError from "../services/errors/custom-error.js";
import generarInfoError from "../services/errors/info.js";
import EErrors from "../services/errors/enums.js";
const router = Router(); 

const arrayUsuarios = [];

router.post("/", async (req, res, next) => {
    const {nombre, apellido, email} = req.body; 

    try {
        if(!nombre || !apellido || !email) {
            throw CustomError.crearError({
                nombre: "Usuario nuevo",
                causa: generarInfoError({nombre, apellido, email}), 
                mensaje: "Error al intentar crear un usuario",
                codigo: EErrors.TIPO_INVALIDO
            }); 
        }

        const usuario = {
            nombre,
            apellido,
            email
        }

        arrayUsuarios.push(usuario); 
        console.log(arrayUsuarios);
        res.send({status: "success", payload: usuario})
        
    } catch (error) {
        next(error); 
    }
})

export default router; 