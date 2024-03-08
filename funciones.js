/*
function sumar(num1, num2) {
    return num1 + num2;
}


console.log( sumar(4, 30) );
*/
// Crear una función llamada saludar que recibe por
// parámetro la variable nombre
// Llamar la función con su nombre por parámetro
/*
function saludar(nombre) {
    return "Hola " + nombre + " como estás";
}

console.log( saludar("Felipe") );
console.log( saludar("Duvan") );
console.log( saludar("Eduard") );
console.log( saludar("Daniel") );
*/
/* Crear una funcion llamada calcularArea que permita
calcular el área de un triangulo


function calcularArea(base, altura) {
    return (base*altura) / 2
}

console.log(calcularArea(10, 5));
*/

// Crear una funcion que me calcule el IVA (19%) de un producto
function calcularIVA(precioProducto) {
    return (19 * precioProducto) / 100
}

let resultado = calcularIVA(500000)
console.log(resultado)

// Escribe una función llamada esFinDeSemana() que tome un parámetro   dia  (de l 1 al 7, donde 1 representa el lunes y así hasta el 7 domingo) y devuelva un mensaje si el día es sábado o es domingo

/* let dia = 5 */
function esFinDeSemana (dia) {
    if(dia == 6 || dia == 7) {
        console.log("Es fin de semana");
    }
    else {
        console.log("No es fin de semana")
    }
}
esFinDeSemana(5);

