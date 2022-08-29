
//funciones

//tareas

//Estructura basica

//DECLARATIVAS--> dentro del () van datos, parametros, elementos

//despues de la funcion va el nombre de la misma(SALUDAR)--> por eso se llama declarativa


function saludar(nombre){

    //acciones
    console.log('hola como estas?', nombre)
}

let persona='tomas'

saludar(persona)


//ANONIMAS

/*funciones que no tienen un nombre declarado,
  creo una variable y la igualo a la funcion.
*/


const saludar2 = function(jugador){

    //acciones

    //let player='messi'
    console.log(`el mejor del mundo es ${jugador}`)
}

saludar2(persona)

//ejemplo practico

let num1=56
let num2=78

function suma(){

    console.log(num1+num2)
}

suma()

/*
en este caso no necesita parametros o argumentos, por que estoy declarando directamente las
acciones dentro de el console log.0
*/


//SCOPE-------------
/*
en este caso podemos usar distintas variables, ya sean globales, o variables que esten dentro de la funcion,
y el valor de la misma dependera de donde este la variable cuando la utilizemos
*/

/*
function suma() {
    // let num1=12
    // let num2=20
  
    num3 = 789;
  
    console.log(num1 + num2);
  }
  
  suma();
  */

  //RETURN
  //valor que va a retornar de la funcion

  function obtenerPar(num){

    if (num%2===0) {
        return'el numero es par'
    }else{
        return'el numero es impar'
    }
  }

  //el valor que me devuelve el return lo igualo con una variable
  let mensaje=obtenerPar(48)

  //===============================

  // ejercicio calculadora
  
  // utilizando if y switch

  
  let valor1 = parseFloat(prompt('ingrese el primer valor'))
  let valor2 = parseFloat(prompt('ingrese el segundo valor'))

  function calculadora (num1, num2){

    if(!num1 || !num2){
        return 'falta alguno de los numeros'
    }

    let operacion=prompt('ingrese la operacion')

    switch (operacion) {
        case "suma":
            return num1 + num2

        case "resta":
            return num1 - num2

        case "multi":
            return num1 * num2

        case "division":
            return num1 / num2
        
        default:
            return 'la operacion no es valida'
    }
  }

  let resultado = calculadora(valor1,valor2)
  alert(`el resultado de la operacion es ${resultado}`)

/*
!num 1
estamos negando para que cuando ingresen un valor que no sea un numero 
retorne que es invalido


//======================================

//ejercicio para calcular las tablas

//utilizando while y for

/*
function calcularTabla() {
    let tabla = parseInt(prompt("Ingrese la tabla a calcular"));
  
    while (tabla) {
      console.log(`======Tabla del ${tabla}======`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${tabla} x ${i} = ${tabla * i}`);
      }
  
      console.log("============================");
  
      tabla = parseInt(prompt("Ingrese la tabla a calcular"));
    }
  
    // if(isNaN(tabla)){
    //   console.log('El valor ingresado no es un número')
    // }
  }
*/

