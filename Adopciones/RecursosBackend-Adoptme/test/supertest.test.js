//1) Instalamos Supertest: npm i -D supertest

//Supertest es una librería que nos permitirá ejecutar peticiones HTTP a nuestro servidor, para poder probar funcionalidades como estatus de peticiones, envío de bodies en petición o revisión de respuestas recibidas por el servidor.


//2) Importamos supertest:
import supertest from "supertest";

//Importamos a nuestro gran amigo Chai: 
import { expect } from "chai";

//Vamos a crear una constante "requester", quien se encargará de hacer las peticiones al servidor. 

const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptame", () => {
    describe("Testing de Mascotitas", () => {
        it("El endoint /api/pets debe crear una mascota correctamente", async() => {
            
            //Creamos un objeto con los datos de la nueva mascota: 
            const pichichoMock = {
                name: "Firulais", 
                specie: "Pichicho", 
                birthDate: "2021-03-10"
            }

            const {statusCode, ok, _body}  = await requester.post("/api/pets").send(pichichoMock); 

            console.log(statusCode);
            console.log(ok); 
            console.log(_body); 
            
            //Acá verificamos todos los datos con Chai: 

            expect(_body.payload).to.have.property("_id"); 

        })

        //Nuevos test: 

        it("Al crear una mascota solo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted: false", async () => {

            const nuevaMascota = {
                name: "Rex",
                specie: "Perro Alfa", 
                birthDate: "1980-06-01"
            }

            const {statusCode, _body} = await requester.post("/api/pets").send(nuevaMascota); 

            expect(statusCode).to.equal(200); 
            expect(_body.payload).to.have.property("adopted").that.equals(false); 
        })
    })
})