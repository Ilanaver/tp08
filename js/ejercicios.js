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

/*A. Comparar si 10 es igual a '10' con ==

B. Comparar si 10 es igual a '10' con ===. ¿Qué diferencias encontrás?

C. ¿De qué tipo de dato es 10.6?

D. ¿Es cierto que para JavaScript true es == 1? ¿Qué conclusiones podemos obtener?*/

function Comparar_A() {
  const numero = 10;
  const frase = '10';
  var igual = false;
  if(numero == frase) return igual = true;
  else return igual;
}
function Comparar_B() {
  const numero = 10;
  const frase = '10';
  var igual = false;
  if(numero === frase) return igual = true;
  else return igual;
}

/*Crear un objeto de tipo ciudad con los campos: nombre, fechaFundacion, poblacion, extensión. 

Recorrer y mostrar todos las claves y valores por separado del objeto ciudad.

Opcional : Validar todos los ingresos de datos (prompts) */

  function MostrarCiudades(Ciudad){
    for(let i = 0; i < Ciudad.length; i++){
      i = Ciudad;
      console.log(i)
    }

}
/*Crear una función que, a raíz de recibir por parámetro un array de números, 

cree un nuevo array donde cada elemento sea el doble del elemento correspondiente en el array original.*/

function Doble_elementos(arrayRecibido) {
  const arrayDuplicados = arrayRecibido.map(arrayRecibido => arrayRecibido*2);
  return arrayDuplicados;
}

/*¿Cómo harías para dibujar en la consola el siguiente triángulo de asterisco?
(a)*/
function TrianguloAsteriscos(){
  for (let i = 0; i < 0; index++) {
    const element = array[index];
    
}
}

/*Se debe solicitar al usuario que ingrese una lista de nombres separados por coma. Luego, muestra en el DOM los nombres que comienzan con la letra 'A'.*/
function nombresA(nombresRecibidos) {
  let nombresSeparados = nombresRecibidos.split(',');
  console.log(nombresSeparados);
  let nombresConA = nombresSeparados.filter(nombres => nombres.toUpperCase().startsWith("A"));
  return nombresConA;
}