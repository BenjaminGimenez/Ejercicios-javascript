
//Estructuras de control

//if else

//si se cumple la condicion se realiza la accion

//ESTRUCTURA DE IF..ELSE

/*if (condition) {
    
 acciones 

}else{
    si no se cumple 
}
    */

let num = 25

if (num % 2 === 0){

console.log('el numero es par')

}else{

    console.warn('el numero no es par')
}

//IF ANIDADOS

// if (condition) {
    
//     //acciones
// }else if(condicion2){

//     //acciones
// }else if(condicion3){
    
//     //acciones
// }else{

//     //si no se cumple

// }

//ejemplo

if (num < 10) {
    
    console.log('el numero es menor a 10')
}else if(num > 10){
    console.log('el numero es mayor a 10')
}else{
    console.log('el numero es igual a 10')
}

//ejemplo RollingFest

/*
Solo pueden entrar a Rolling Fest quienes cumplan estas condiciones:
- Tiene que ser mayor de edad (mayor o igual a 18)
- Si es menor de edad tiene que venir acompañado de un tutor.

*/

//DATROS DE ENTRADA
//Edad
//tutor

//esta es una forma de hacerlo==============

/* 
 let edad = 15
 let tutor = false

 if (edad >= 18) {
     alert('puede entrar a la RollingFest 😎')
 }else if(tutor === true){
     alert('puede entrar a la RollingFest pero no te separes de tu tutor 😎')
 }else{
     alert(' No puedes entrar a la RollingFest 😎')
 }
 */

//otra forma de hacerlo==============

/*
let edad = prompt('ingresa tu edad')
let tutor = confirm('vienes con un tutor?')

if (edad >= 18) {
    alert('puede entrar a la RollingFest 😎')
}else if(tutor === true){
    alert('puede entrar a la RollingFest pero no te separes de tu tutor 😎')
}else{
    alert(' No puedes entrar a la RollingFest 😎')
}
*/

//otra forma de hacerlo ==============

/*
En este caso usamos isNAN(Not a number) para que el usuario tenga que ingresar si o si un numero, 
y no pueda ingresar otro valor incorrecto.
*/

let edad = parseInt(prompt("Ingresa tu edad"));

if (isNaN(edad)) {
  alert("Debe ingresar un número");
} else {
  if (edad >= 18) {
    alert("Puedes entrar a Rolling Fest 😎");
  } else if (confirm("¿Vienes con un tutor?")) {
    alert("Puedes entrar a Rolling Fest pero no te separes de tu tutor 🙂");
  } else {
    alert("No puedes entrar a Rolling Fest 😞");
  }
}

