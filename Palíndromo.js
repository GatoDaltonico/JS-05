// Solicitar una palabra o frase
let entrada = prompt("Ingresa una palabra o frase:");

// Eliminar puntuación, espacios y convertir a minúsculas
let entradaLimpia = entrada.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");

// Invertir la cadena
let entradaInvertida = entradaLimpia.split('').reverse().join('');

// Verificar si es un palíndromo
if (entradaLimpia === entradaInvertida) {
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}