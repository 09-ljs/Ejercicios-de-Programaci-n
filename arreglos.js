// Este es de archivo de arreglos

let nombres = ["Felipe", "Danilo", "Jimena"];
console.log(nombres);

nombres[2]
console.log(nombres[2]);

// Agregar elementos al arreglo de nombres
nombres.push("Andrés");
console.log(nombres);

let equipos = ["Nacional", "Milonarios", "América", "Medellín", "Junior"];
console.log(equipos[1]);

// Averiguar el total de elementos

let motos = ["Yamaha", "Kawasaki", "Honda", "Suzuki", "Ducati"];
// lenght es el conteo de los arreglos
console.log(motos.length);

// Sumar los números de un arreglo
let numeros = [2, 5 ,3, 9, 1];
let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

// Encontrar el número mayor de un arreglo

let numeroMayor = Math.max(...numeros);
console.log(numeroMayor);

// Invertir los textos de un arreglo

let frutas = ["Guayaba", "Manzana", "Lulo", "Maracuya", "Fresa"];
let frutasInvertidas = frutas.slice().reverse();
console.log(frutasInvertidas);

// Agrupar arreglos

let mujeres = ["Laura", "Sofia", "Valentina", "Valeria", "Danna"];
let hombres = ["Felipe", "Danilo", "Fabian", "David", "Alejandro"];
let personas = [...mujeres, ...hombres];
console.log(personas);

// Poner en mayusculas el segundo elemento

let mayusculas = mujeres[2].toUpperCase();
console.log(mayusculas);