// 4. Diseñar un programa que me permita ingresar n cantidad de palabras por teclado, al
// finalizar la carga, se debe enviar como a una función expresada como único
// parámetro rest donde nos responderá cuál de las palabras ingresadas es mayor a
// todas las anteriores.

const cantidad = parseInt(prompt("Ingrese la cantidad de elementos en el array"));
const arreglo = [];
var nombre;

for (let i = 0; i < cantidad; i++) {
  nombre = prompt("Ingrse una palabra").split("");
  arreglo[i] = nombre;
}

const orden = function (...arreglo) {
  let mayor = nombre[0];
  for (let i = 0; i < arreglo.length; i++) {

  }


}


console.log(orden(...arreglo));

