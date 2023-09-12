/*Calculadora de edad

Crear una función que reciba un string con una fecha en formato 'YYYY-MM-DD' y devuelva un número con la edad de la persona.

Pedir al usuario su nombre y su fecha de nacimiento. Luego, mostrar en la consola un mensaje que diga "Hola [nombre], tienes [edad] años!"
*/
function calcularEdad() {
    const nombre = prompt('Por favor, ingresa tu nombre:');
    const fechaNacimiento = prompt('Por favor, ingresa tu fecha de nacimiento en formato YYYY-MM-DD:');
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    
    // Ajustar la edad si el cumpleaños aún no ha ocurrido este año
    if (
      fechaNacimientoDate.getMonth() > fechaActual.getMonth() ||
      (fechaNacimientoDate.getMonth() === fechaActual.getMonth() &&
        fechaNacimientoDate.getDate() > fechaActual.getDate())
    ) {
      edad--;
    }
    console.log('Hola ' + nombre + ', tienes ' + edad + ' años!');

}
  
  // Solicitar el nombre y la fecha de nacimiento al usuario

  
  // Calcular la edad del usuario utilizando la función calcularEdad
  const edad = calcularEdad();
  
  // Mostrar el mensaje con la edad calculada

  
const frutas = ["manzana", "pera", "durazno", "kiwi", "pomelo", "sandia", "uva", "banana", "ciruela", "melon"] ;


console.log(frutas);
let EleccionFruta = prompt("¿Que fruta desea?")
if(EleccionFruta != frutas.fruta)
alert("No, no tenemos" + EleccionFruta ,"!");
if(EleccionFruta != frutas.fruta)
alert("Sí, tenemos" + EleccionFruta + "!");


const Ciudad = {
    nombre: "",
    FechaFundacion:12/02/1987 ,
    poblacion:10 ,
    extension: 1000000

}
