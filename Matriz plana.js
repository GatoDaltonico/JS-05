// Matriz original
let matrizMultiDimensional = [1, [2, 3, [4, 5, [6]]]];

// Aplanar la matriz utilizando el método flat()
let matrizPlana = matrizMultiDimensional.flat(Infinity);

console.log("Matriz aplanada:", matrizPlana);