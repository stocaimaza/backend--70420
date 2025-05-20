//npm install -D mocha
//Instalamos chai: npm install -D chai 
import mongoose from "mongoose";
import { expect } from "chai";
//Conla ultima version de chai tenemos que importar "expect". 
//Modulo nativo de Node JS que nos permite hacer las validaciones
import User from "../src/dao/Users.dao.js"; 


//Me conecto aca a la base de datos: 
 mongoose.connect(`mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/Backend3FinalAltaClase?retryWrites=true&w=majority&appName=Cluster0`)

//describe: es una función que me permite agrupar un conjunto de pruebas relacionadas bajo un mismo bloque descriptivo. 

 describe("Testeamos el DAO de usuarios", function() {

    before(function() {
        this.userDao = new User()
    })

    //Limpiamos la base de datos cada vez que testeamos
    beforeEach(async function() {
        await mongoose.connection.collections.users.drop(); 
        this.timeout(5000); 
    })


    //Pruebas: 
    it("El get de usuarios me retorna un array", async function () {
        const resultado = await this.userDao.get(); 
         //assert.strictEqual(Array.isArray(resultado), true); 

         //Ahora lo hago con chai: 
         expect(Array.isArray(resultado)).to.be.true; 
    })
    
    //test 1: 

    it("El Dao debe agregar correctamente un elemento a la base de datos.", async function (){
        let usuario = {
            first_name: "Goldie", 
            last_name: "Legrand", 
            email: "goldi@legrand.com", 
            password: "1234"
        }

        const resultado = await this.userDao.save(usuario)
        //assert.ok(resultado._id); 
        expect(resultado).to.have.property("_id"); 

    })

    //test 2: 

    it("Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.", async function () {
         let usuario = {
            first_name: "Goldie", 
            last_name: "Legrand", 
            email: "goldi@legrand.com", 
            password: "1234"
        }

        const resultado = await this.userDao.save(usuario); 
        //assert.deepStrictEqual(resutado.pets, []); 
        expect(resultado.pets).to.deep.equal([]); 
    })

    //test 3: 

    it("El Dao puede obtener  a un usuario por email", async function () {
         let usuario = {
            first_name: "Goldie", 
            last_name: "Legrand", 
            email: "goldi@legrand.com", 
            password: "1234"
        }

       await this.userDao.save(usuario); 

       const user = await this.userDao.getBy({email: usuario.email}); 
       //assert.strictEqual(typeof user, "object"); 
       expect(user).to.be.an("object"); 
    })

    after(async function () {
        await mongoose.disconnect(); 
    })

    

 })