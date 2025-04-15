// CLASE 2: PRIMERA PARTE MOCKS Y TDD

//TDD: Es una metodologia de desarrollo de software que consiste en pensar y escribir las pruebas que debe cumplir determinada función incluso antes de escribirla.

//Ejemplo: tengo que escribir una función que sume dos números. ¿Que pruebas deberia pasar para garantizar su correcto funcionamiento en la etapa productiva? 

//CICLO DEL TDD: 

//1) ESCRIBIR UNA PRUEBA FALLIDA: 

// const suma = (a, b) => {
//     return a + b; 
// }


//ESCENARIOS QUE DEBEMOS SUPERAR: 

//1. La función debe retornar NULL si algun parametro no es numerico.
//2. La función debe retornar 0 si no se pasa ningun parametro. 
//3. La función debe poder relizar la suma correctamente. 
//4. La función debe poder hacer la suma con cualquier cantidad de numeros. 

//2) HACER QUE LA PRUEBA PASE: 

// const suma = (a, b) => {
//     //Test 2: 
//     if (!a || !b) {
//         return 0; 
//     }


//     //Test 1: 
//     if (typeof a !== "number" || typeof b !== "number") {
//         return null; 
//     }

//     //Test 3: 
//     return a + b; 
// }

//PARA RESOLVER EL TEST 4 VAMOS A TENER QUE MODIFICAR TODA LA FUNCIÓNN PARA RECIBIR N PARAMETROS: 

// const suma = (...numeros)  => {
//     //Debo retornar 0 si no recibo ningun parametro. 

//     if(numeros.length === 0) {
//         return 0; 
//     }

//     //Retornamos null si algun dato no es numerico: 

//     let banderita = true; 

//     for (let i = 0; i < numeros.length && banderita; i++) {
//         if(typeof numeros[i] !== "number") {
//             banderita = false; 
//         }
//     }

//     if (banderita !== true) {
//         return null; 
//     }

//     //Test 3 y 4: 
//     let resultado = 0; 
//     for(let i = 0; i < numeros.length; i++ ) {
//         resultado += numeros[i]; 
//     }
//     return resultado; 
// }

// 3 ) REFACTORIZAR: 
// Buscamos sintetizar y hacer más legible nuestro código. 

const suma = (...numeros) => {
    if(numeros.length === 0) return 0; 
    if(!numeros.every(num => typeof num === "number")) return null; 
    return numeros.reduce((acumulador, elemento) => acumulador  + elemento, 0); 
}


//TEST: 
let testPasados = 0; 
let testTotales = 4; 

//Prueba 1: 
console.log("1. La función debe retornar NULL si algun parametro no es numerico.");
let resultado1 = suma("2", 3);
if (resultado1 === null) {
    console.log("Test 1 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 1 no se pasó, se esperaba null pero se recibió " + resultado1 );
}
console.log("-------------------------------------------------------------");

//Prueba 2: 
console.log("2. La función debe retornar 0 si no se pasa ningun parametro.");
let resultado2 = suma();
if (resultado2 === 0) {
    console.log("Test 2 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 2 no se pasó, se esperaba 0 pero se recibió " + resultado2 );
}
console.log("-------------------------------------------------------------");

//Prueba 3: 
console.log("3. La función debe poder relizar la suma correctamente.");
let resultado3 = suma(2, 3);
if (resultado3 === 5) {
    console.log("Test 3 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 3 no se pasó, se esperaba 5 pero se recibió " + resultado3 );
}
console.log("-------------------------------------------------------------");


//Prueba 4: 
console.log("4. La función debe poder hacer la suma con cualquier cantidad de numeros. ");
let resultado4 = suma(1, 2, 3, 4, 5);
if (resultado4 === 15) {
    console.log("Test 4 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 4 no se pasó, se esperaba 15 pero se recibió " + resultado4 );
}
console.log("-------------------------------------------------------------");

if(testPasados === testTotales) {
    console.log("Felicitaciones, todos los test se pasaron con éxito, esto es lo tuyo, dale segui estudiando con toda la energia"); 
} else {
    console.log("Se pasaron " + testPasados + " de un total de " + testTotales + " todo es bronca y dolor"); 
}