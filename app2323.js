
// Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarMensaje(){
console.log('Hola Mundo!');
}
mostrarMensaje();

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre){
    console.log(`Hola ${nombre}!`);
}
mostrarHolaNombre("Axel");

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function calcularDoble(numero){
  return numero*2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);

// Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.

function encontrandoElMayor(x, y){
    return x > y ? x : y;

}
let numeroMayor = encontrandoElMayor(22, 19);
console.log(numeroMayor);

// Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(number){
return number*number;
}
let result = cuadrado(5);
console.log(result);