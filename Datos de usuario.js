// Solicitar datos del usuario
let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
let edad = prompt("Ingresa tu edad:");
let numPelisFavoritas = parseInt(prompt("¿Cuántas películas favoritas tienes?"));
let peliculas = [];

// Mostrar un mensaje distinto si el usuario no tiene películas favoritas
if (numPelisFavoritas === 0) {
    console.log("No tengo ninguna película favorita.");
} else {
    // Pedir películas favoritas una por una
    for (let i = 0; i < numPelisFavoritas; i++) {
        peliculas.push(prompt(`Ingresa tu película favorita número ${i + 1}:`));
    }

    // Mostrar la información en la consola
    console.log(`Nombre de usuario: ${nombreUsuario}`);
    console.log(`Edad: ${edad}`);
    console.log("Películas favoritas:");
    peliculas.forEach(pelicula => console.log(`La película "${pelicula.trim()}" es una de mis favoritas.`));
}
