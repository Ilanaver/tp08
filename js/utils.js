//1
const nombre = prompt('Por favor, ingresa tu nombre:');
const fechaNacimiento = prompt('Por favor, ingresa tu fecha de nacimiento en formato YYYY-MM-DD:');

const edad = calcularEdad(fechaNacimiento);
console.log('Hola ' + nombre + ', tienes ' + edad + ' años!');