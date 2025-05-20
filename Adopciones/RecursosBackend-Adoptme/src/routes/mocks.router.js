import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";
const router = Router(); 

//Endpoint para obtener mascotas simuladas: 
router.get("/mockingpets", mocksController.crearMascotas); 

export default router; 