import MockingService from "../services/mocking.js";

const crearMascotas = async (req, res) => {
    const mascotas = await MockingService.generarMascotasMocking(50); 
    res.send({status:"Exitoso", payload: mascotas}); 
}

export default {
    crearMascotas
}
