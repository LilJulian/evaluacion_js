


// 2. Diseñar un programa que me solicite ingresar n cantidad de números por teclado,
//   luego de ingresar los números el programa me debe solicitar que operación deseo
// realizar:
// a.Sumar los números
// b.Contar los números primos
// c.Contar los números pares
// d.Calcular el promedio de los números primos
// e.Calcular el promedio de números pares

var arraynum = [];                                                          //
var arrayPares = [];                                                        //Declarar variables globales y una constante
const n = parseInt(prompt("Inrese la cantidad de numeros"));                //



function operaciones() {                                      //Declarar la funcion que nos asignara los numeros a los arreglos
  for (let i = 0; i < n; i++) {                                //Ciclo parar agregar numeros a cada posicion del arreglo
    let num = parseInt(prompt("Inrese el numero"));
    arraynum[i] = num;
  }
  return arraynum;
}




function sumarNum(arraynum) {                                             //Funcion para hacer la suma de los arreglos
  let suma = 0;
  for (let i = 0; i < arraynum.length; i++) {                             //Ciclo para sumar cada numero
    suma = suma + arraynum[i];
  }
  console.log("La suma de los numeros del array es: " + suma);
}
function contarPrimos(arraynum) {                                         //Funcion para contar los numeros primos
  // let divisores = 0;                                                   //Variables para contar
  // let contador = 0;
  // for (let i = 0; i < arraynum.length; i++) {                          //Ciclo para recorrer el arreglo
  //   for (let j = 2; j < arraynum[i]; j++) {                            //Ciclo para obtener el residuo
  //     if (arraynum[i] % j == 0) {                                      //COndicion para sacar el residuo
  //       divisores++;
  //     } else {
  //       false;
  //     }
  //     if (divisores == 2) {
  //       contador++;
  //     }
  //   }
  // }
  // console.log(contador);

}

function contarPares(arraynum) {                                          //Funcion para contar pares
  let contador = 0;                                                       //variable para contar
  for (let i = 0; i < arraynum.length; i++) {                             //Ciclo para recorres el arreglo
    if (arraynum[i] % 2 === 0) {                                          //COndicion para obtener los parse
      contador++;
    } else {
      false;
    }
  }
  console.log(`Hay ${contador} numeros pares`);

}

function promedioPrimos(params) {                                         //FUncion para hallar el promedio de los numeros primos

}



function PromedioPares(arraynum, arrayPares) {                          //Funcion para hallar el promedio de los pares
  let suma = 0;
  for (let i = 0; i < arrayPares.length; i++) {                         //Ciclo para sumar los pares
    suma = suma + arrayPares[i]
  }
  console.log(suma);

}

operaciones();                                                            //Lamar al metodo

var opcion = prompt(`Ingrese una obcion de acuerdo a:
  a.Sumar los números
  b.Contar los números primos
  c.Contar los números pares                                              
  d.Calcular el promedio de los números primos
  e.Calcular el promedio de números pares`);

if (opcion.toLowerCase() == "a") {                      //Dar a elegir una opcion y llamar a un metodo
  sumarNum(arraynum);
} else if (opcion.toLowerCase() == "b") {
  contarPrimos(arraynum);
} else if (opcion.toLowerCase() == "c") {
  contarPares(arraynum);
} else if (opcion.toLowerCase() == "d") {
  promedioPrimos(arraynum)
} else if (opcion.toLowerCase() == "e") {
  PromedioPares(arraynum, arrayPares)
}

