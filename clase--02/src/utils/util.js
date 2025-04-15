import { faker } from "@faker-js/faker"; 

const generarUsuarios = () => {
    return {
        id: faker.database.mongodbObjectId(), 
        first_name: faker.person.firstName(), 
        last_name: faker.person.lastName(), 
        phone: faker.phone.number(), 
        email: faker.internet.email()
    }
}

export default generarUsuarios; 