// 3. Diseñar un programa que me solicite por teclado n cantidad de números, al finalizar
// la carga de los números el programa debe enviar los números a una función
// expresada como único parámetro rest donde serán ordenados de mayor a menor
// para luego mostrarlos en una tabla por consola

const cantidad = parseInt(prompt("Ingrese la cantidad de numeros: "));  //Ingresar el tamaño del arreglo
var arreglo = [];                                                       //Declarar el arreglo y los la ariable donde iran los numeors
var num;

for (let i = 0; i < cantidad; i++) {                                    //Ciclo para ingresar los numeros al arreglo
  num = parseInt(prompt("Ingrese los numeros"));
  arreglo[i] = num;
}


const orderar = function (...arreglo) {
  for (let i = 0; i < arreglo.length; i++) {

  }
}



