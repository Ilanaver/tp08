/*Calculadora de edad

Crear una función que reciba un string con una fecha en formato 'YYYY-MM-DD' y devuelva un número con la edad de la persona.

Pedir al usuario su nombre y su fecha de nacimiento. Luego, mostrar en la consola un mensaje que diga "Hola [nombre], tienes [edad] años!"*/

function calcularEdad(fechaNacimiento) {
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var fechaActual = new Date();
  const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  if(fechaNacimientoDate.getMonth() > fechaActual.getMonth() || (fechaNacimientoDate.getMonth() === fechaActual.getMonth() && fechaNacimientoDate.getDate() > fechaActual.getDate())) 
  {
    edad--;
  }
  return edad;
}

/*Crear un array de strings con 10 frutas y mostrarlo en consola de manera prolija.

Pedir al usuario una fruta. Buscar la fruta en el array. Si la fruta existe,

mostrar un mensaje que diga "Sí, tenemos [fruta]!”. Si no existe, mostrar un mensaje que diga "No, no tenemos [fruta]!"*/

const frutas = ["manzana", "pera", "durazno", "kiwi", "pomelo", "sandia", "uva", "banana", "ciruela", "melon"] ;
console.log(frutas);
function Existfrutas(EleccionFruta){
  var frutaEncontrada = false;
  for (var i = 0; i < frutas.length; i++) {
      if (frutas[i].toLowerCase() === EleccionFruta.toLowerCase()) {
          frutaEncontrada = true;
          break;
      }
  }
  if (frutaEncontrada) {
    console.log("Sí, tenemos " + EleccionFruta + "!");
  } else {
    console.log("No, no tenemos " + EleccionFruta + "!");
  }  
}


const Ciudad = {
    nombre: "",
    FechaFundacion:12/02/1987 ,
    poblacion:10 ,
    extension: 1000000

}

