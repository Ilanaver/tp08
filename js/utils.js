//1
console.log("ejercicio 1");
const nombre = prompt("Por favor, ingresa tu nombre:");
const fechaNacimiento = prompt("Por favor, ingresa tu fecha de nacimiento en formato YYYY-MM-DD:");

const edad = calcularEdad(fechaNacimiento);
console.log("Hola " + nombre + ", tienes " + edad + " años!");

//2
console.log("ejercicio 2");
let EleccionFruta = prompt("¿Que fruta desea?")
const fruta = Existfrutas(EleccionFruta);

//3 
console.log("ejercicio 3");
const comparar_A = Comparar_A();
console.log("10 == '10' es: " + comparar_A);
const comparar_B = Comparar_B();
console.log("10 === '10' es: " + comparar_B);
let respB = "La diferencia es: \n '==' muestra que el numero 10 es igual a la frase 10, porque al fin y al cabo son lo mismo. \n \
'===' muestra que no son iguales porque no es EXACTAMENTE igual, ya que uno es una cadena y el otro un numero.";
console.log(respB);
console.log("10.6 es una variable tipo: " + typeof 10.6);
let conclusion = "La conclusion a la que llegamos es que es 1 porque las computadoras se rigen por el sistema de numeros binario, osea 0 o 1.\n\
Por lo que podemos comprender en base a esto que 0 es false.";
console.log(conclusion);

//4
const Ciudad = {
    nombre: "",
    FechaFundacion:12/02/1987 ,
    poblacion:10 ,
    extension: 1000000 ,
    nombre: "",
    FechaFundacion:22/07/1999 ,
    poblacion:10000 ,
    extension: 2129348 
  }
  const Ciudades = MostrarCiudades(Ciudad);
  console.log(Ciudades);
  
//5
const arrayRecibido = [2, 4, 6, 8, 10];
const arrays = Doble_elementos(arrayRecibido);
console.log(arrays);

//6
let filas = prompt("¿De que altura queres que sea  el triangulo?")
let filas2 = prompt("¿de que altura quiere el segundo triangulo?")
//7
let nombresRecibidos = prompt("ingrese una lista de nombres separados por coma.");
const devolvernombres = nombresA(nombresRecibidos);
let result7 = document.getElementById("Resultado7");
for (let nombre of devolvernombres) {
  result7.innerHTML += nombre + "<br>";
}

//8
const texto = prompt("Escriba un texto")
const textoMinusculas = texto.toLocaleLowerCase();
let ElegirPalabra = prompt("Elija la palabra que quiere camiar")

let PalabraRemplazar = prompt("¿por que parabra la quiere remplazar?")
let result8 = document.getElementById("Resultado8");
result8.innerHTML = frase(texto,ElegirPalabra,PalabraRemplazar);




//9
let cadena = prompt("Ingrese una cadena de texto");
let number = prompt("Ingrese un numero");
let result9 = document.getElementById("Resultado9");
result9.innerHTML = TextoCortado(cadena, number);

//10

//11
let objetosPedidos = prompt("ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma. \
Un ejemplo es: 'Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25'");
let result11 = document.getElementById("Resultado11");
result11.innerHTML = CalcularRecaudacion(objetosPedidos);
