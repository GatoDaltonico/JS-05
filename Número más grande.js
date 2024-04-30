// Solicitar el primer número
let numeroMayor = parseFloat(prompt("Ingresa el primer número:"));

// Solicitar y comparar los siguientes 9 números
for (let i = 1; i < 10; i++) {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
}

console.log(`El número más alto es: ${numeroMayor}`);
