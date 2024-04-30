// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Solicitar un número entero positivo
let numero;
do {
    numero = parseInt(prompt("Ingresa un número entero positivo:"));
} while (isNaN(numero) || numero < 0);

// Calcular y mostrar el factorial
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
