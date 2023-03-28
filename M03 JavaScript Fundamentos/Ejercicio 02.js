/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var suma = x + y;
   var x = 2;
   var y = 3;
   return suma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resta = x - y;
   var x = 5;
   var y = 2;
   return resta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var divide = x / y;
   var x = 10;
   var y = 2;
   return divide;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multiplica = x * y;
   var x = 12;
   var y = 2;
   return multiplica;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var obtenerResto = x % y;
   var x = 15;
   var y = 3;
   return obtenerResto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
