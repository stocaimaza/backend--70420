import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from "./routes/mocks.router.js";

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/Backend3FinalAltaClase?retryWrites=true&w=majority&appName=Cluster0`)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/mocks", mocksRouter); 

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


//1) Instalamos Swagger: https://swagger.io
//npm install swagger-jsdoc swagger-ui-express

//swagger-jsdoc: nos deja escribir la configuración en un archivo .yaml (tambien en un json) y a partir de ahi se genera un apidoc.

//swagger-ui-express: nos permitirá linkear una interfaz grafica para poder visualizar toda la documentación. 


//2) Importamos los módulos
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from "swagger-ui-express"; 


//3) Creamos un objeto de configuración: swaggerOptions

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de la App Adoptame", 
            description: "App dedicada a encontrar familias para los perritos o jirafas de la calle"
        }
    }, 
    apis: ["./src/docs/**/*.yaml"]
}

//4) Conectamos Swagger a nuestro servidor de express. 

const specs = swaggerJSDoc(swaggerOptions);

app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));