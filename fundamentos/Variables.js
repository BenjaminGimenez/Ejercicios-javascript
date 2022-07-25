
// ========VARIABLES========== //

//espacio en memoria, en donde yo guardo informacion

//3 formas de llamar a las variables

var nombre='benjamin' //ya no se usa

let apellido='gimenez' //usamos let cuando queremos que la variable cambie

const apodo='BenYa' //usamos const para que la variable sea constante y no este cambiando

//Tipos de datos que puedo almacenar en una variable

//String
let cliente='pochi rodriguez'

//Number
let numero1=4
let numero2=7
let numero3=9

//Boolean: son los tipos de datos que son verdaderos o falsos
let comer=true
let comprar=false

//Null 
let billetera=null

//Undefined
let caja

//Arrays o arreglos
let frutas = ['manzana', 'banana', 'pera']

//Objetos u Object: elemento que creamos que tiene propiedades

let alumno={
    nombre:'Jose',
    apellido:'Perez'
}

//Operadores

//Aritmeticos

let suma=numero1+numero2
let resta=numero3-numero2
let multiplicacion=numero3*numero1
let diviision=numero2/numero1

//unitarios
++numero1;
--numero1;

//Relacionales
console.log(numero1 == numero2); //se usa para comparar
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero3 != numero2); //se usa para decir si un elemento es distintoa a otro

//Negacion
let abierto = false;
console.log(!abierto)

//=====================================//

//Tarea
// Creamos dos variables: numero1, numero2
// mostramos por consola los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos npumeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numero 2

let num1=10
let num2=20

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(
  "El resultado si el numero 1 es mayor o igual que numero 2 es",
  num1 >= num2
);

console.log("El resultado si numero 1 es distinto de numero 2", num1 != num2);

console.log("Mi nombre es " + nombre + " " + apellido);

// let nombrecito = prompt("Escribe tu nombre");
// let edad = prompt("Ingresa tu edad");

// console.log("=======Datos de usuario============");
// console.log("Nombre de usuario: " + nombrecito);
// console.log("Edad: " + edad);
// console.log("====================================");


// Ejercicio de practica

// La Escuela RollingStar solicita un sistema, 
// donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente , 
// por eso deciden acudir a un programador para crear un sistema, 
// en el cual se podrá ingresar el nombre, edad, actividad favorita y 
// deporte favorito en una tarjeta de presentación predeterminada

let nameStudent = prompt('escribe tu nombre completo')
let age = prompt('que edad tenes?')
let Activity = prompt('Cual es tu actividad favorita?')
let Deportes = prompt('Cual es tu deporte favorito?')

console.log('!======> Datos del alumno <======!')
console.log('Nombre del alumno: ' + nameStudent)
console.log('Edad del alumno ' + age)
console.log('Actividad favorita ' + Activity)
console.log('Deporte favorito ' + Deportes)
console.log('<=======================>')






