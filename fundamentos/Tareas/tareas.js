
//practica de IF ELSE

/*
-Ingresan dos números

-Si el primero es mayor que el segundo mostrar en consola
la suma de ambos.

-Si el primero es menor que el segundo mostrar en consola
la resta del segundo menos el primero.

-Si son iguales mostrar en consola la multiplicación de ambos.
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3
*/

let num1=46
let num2=16

if (num1>num2) {
    console.log(num1 + num2)
}else if(num1<num2){
    console.log(num1 - num2)
}else if(num1 == num2) {
    console.log(num1 * num2)
}else{
    console.log('no se puede realizar esta operacion')
}

//practica usando SWITCH

/*
-Recibir dos valores y la operación a realizar (+, -, *, /)

-Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0

-Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.

=Si se ingresa una operación que no está contemplada devolver un mensaje de error.
Adjuntos
*/

/*
let valor1=parseFloat(prompt('ingrese el primer valor'))
let valor2=parseFloat(prompt('ingrese el segundo valor'))

let operacion=prompt('ingrese la operacion(suma: +, resta: -, division: /, multiplicacion: *)')

if (isNaN(valor1)) {
    valor1=0
}

if (isNaN(valor2)) {
    valor2=0
}

switch (operacion) {
    case "+":
        console.log(`la suma es igual a ${valor1 + valor2}`)
        break;
    case "-":
        console.log(`la resta es igual a ${valor1 - valor2}`)
        break;
    case "*":
        console.log(`la multiplicacion es igual a ${valor1 * valor2}`)
        break;
     case "/":
        console.log(`la division es igual a ${valor1 / valor2}`)
        break;

    default:
        alert('la operacion que desea ingresar no es valida 😫')
        break;
}

*/
//practica de ARRAYS

/*
-Crea un arreglo llamado tareas

-Agregar mínimo tres tareas con el método correspondiente.

-Mostrar en consola o por pantalla la lista de las tareas ordenadas alfabéticamente y numeradas. Por ejemplo:
1 - Estudiar javascript
2 - Sacar al perro
3 - Tirar la basura

-Mostrar tambien la cantidad de tareas que hay en el arreglo.

-Eliminar la primer tarea y agregar una nueva en su lugar. Usar los métodos correspondientes.

-Reemplazar el valor de la última tarea por "Hacer la tarea para el 24 de noviembre" usando algún método de los arreglos.
*/


//creando arreglo
let tareas=['estudiar js', 'sacar al perro','tirar la basura']

//ordenando alfabeticamente y numeradas
console.log(tareas.sort())

//mostrar la cantidad de elementos
console.log(tareas.length)

//eliminando la primera tarea
tareas.shift()
console.log(tareas)

//agregando otra
tareas.unshift('Estudiar React native')


//reemplazando ultimo elemento
tareas.splice(2,1,"Hacer tarea para el 24 de septiembre")