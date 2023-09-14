//1
console.log("ejercicio 1");
const nombre = prompt('Por favor, ingresa tu nombre:');
const fechaNacimiento = prompt('Por favor, ingresa tu fecha de nacimiento en formato YYYY-MM-DD:');

const edad = calcularEdad(fechaNacimiento);
console.log('Hola ' + nombre + ', tienes ' + edad + ' años!');

//2
console.log("ejercicio 2");
let EleccionFruta = prompt("¿Que fruta desea?")
const fruta = Existfrutas(EleccionFruta);
