import { faker } from "@faker-js/faker"; 

class MockingService {
    static async generarMascotasMocking(cantidad) {
        const mascotas = []; 
        for(let i = 0; i < cantidad; i++) {
            mascotas.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false, 
                birthDate: faker.date.past(), 
                image: "https://via.placeholder.com/150"
            }); 
        }
        return mascotas; 
    }

    static async generarUsuariosMocking() {
        
    }

}

export default MockingService; 