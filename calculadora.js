// 5. Diseñar un módulo llamado calculadora, en este módulo debe exportar una clase
// con los siguientes métodos:
// a.Suma
// b.Resta
// c.Multiplicación
// d.División
// Al momento de realizar cada operación el sistema debe validar que no se presenten
// errores, si al momento de su ejecución se presenta algún error, el sistema debe
// enviar un mensaje personalizado indicando el tipo de error para que el usuario lo
// solucione y continue realizando los cálculos básicos de las matemáticas.
class operaciones {
  constructor(a, b, opcion, sumar) {
    this.a = a;
    this.b = b;
    this.opcion = opcion;

  }
  a = parseInt(prompt("Ingrese el primer numero"));
  b = parseInt(prompt("Ingrese el segundo numero"));
  opcion = prompt("Ingrese la opcion a elegir")


}