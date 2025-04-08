import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: String, 
    apellido: String, 
    legajo: Number
});

const UserModel = mongoose.model("usuarios", usuarioSchema); 

export default UserModel; 


