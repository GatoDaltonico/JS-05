// Solicitar la cantidad de segundos para la alarma
let entrada = prompt("Ingresa la cantidad de segundos para la alarma:");

// Convertir la entrada a un número entero
let segundos = parseInt(entrada);

// Verificar si la entrada es un número válido
if (!isNaN(segundos) && segundos > 0) {
    // Configurar la alarma si la entrada es válida
    setTimeout(() => {
        console.log(`¡Ya han pasado ${segundos} segundos!`);
    }, segundos * 1000);
} else {
    console.log("La entrada no es válida. Por favor, ingresa un número entero positivo.");
}