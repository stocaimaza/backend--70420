//Winston: Popular logger para Node JS
// instalamos: npm i winston

import winston from "winston";

// const logger = winston.createLogger({
//     //Le paso un objeto de configuración. 
//     //Acá configuramos dos cosas: 
//     // El transporte y los niveles. 
//     transports: [
//         new winston.transports.Console({level: "error"}),
//         //Agregamos un nuevo transporte: 
//         new winston.transports.File({
//             filename: "./errors.log",
//             level: "warn"
//         })
//     ]
// })


//Creamos nuestra propia configuración de niveles y colores: 

const niveles =  {
    nivel: {
        fatal: 0, 
        error: 1, 
        warning: 2, 
        info: 3, 
        http: 4, 
        debug: 5
    }, 
    colores: {
        fatal: "red", 
        error: "yellow", 
        warning: "blue", 
        info: "green", 
        http: "magenta", 
        debug: "white"
    }
}


const logger = winston.createLogger({
    levels: niveles.nivel, 
    transports: [
        new winston.transports.Console({
            level:"http",
            format: winston.format.combine(
                winston.format.colorize({colors: niveles.colores}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: "./errors.log", 
            level: "warning", 
            format: winston.format.simple()
        })
    ]
})



//Creamos un middleware: 

export const addLogger = (req, res, next) => {
    req.logger = logger; 
    req.logger.http(`${req.method} en ${req.url}`); 
    next(); 
}