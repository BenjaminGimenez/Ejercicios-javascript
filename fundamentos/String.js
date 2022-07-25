//String

let nombre = 'benjamin'
let apellido = 'Gimenez'

let frase = '     el futuro es hoy     ' //JS toma todos los espacios como caracteres aunque no haya nada

//template string

console.log(`mi nombre es ${nombre} ${apellido}`)

//metodos de los string: son funciones que nos permiten hacer ciertas cosas

//para convertir todo en mayuscula
console.log(nombre.toUpperCase())

//para convertir todo en miniscula
console.log(apellido.toLowerCase())

//para saber la cantidad de caracteres de un string
console.log(nombre.length)

//obtener un caracter en particular 
console.log(apellido.charAt(1))

//para obtener desde una posicion ciertos caracteres
console.log(apellido.substr(1,3))

//para quitar espacios adelante y atras de un string
console.log(frase.trim())

//para obtener el ultimo caracter de un elemento
console.log(nombre.charAt(nombre.length-1))

//como saber si un caracter esta dentro del string
console.log(nombre.includes('b'))

//para reemplazar caracteres---> primero va lo que reemplazo y desp con lo que voy a reemplazar
console.log(frase.replace('futuro','presente'))
//en el caso que quiera crear un nuevo string, y no solo mostrarlo en consola
let nuevaFrase = frase.replace('futuro','presente').trim()

//para sustraer caracter de un string y crear un nuevo string
console.log(apellido.slice('0','4'))

//split ---> para separar el string por caracteres que yo le diga
let letras=nuevaFrase.split('') //---> para separar el string x letra //---> para separlo x palabra(" ") con espacio entre ""

//join ---> para unir lo que separamos
let palabritas=letras.join(' ')

/*
Tarea 1:

Dado el siguiente texto:
"React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."

Reemplazar la palabra React por "Esta librería" en un nuevo texto.
Devuelve en consola si el texto contiene la palabra "eficiente"
Devuelve en consola si el texto contiene la palabra "elementos"

*/

/*
Tarea 2:
 indexOf()
 
Dada la frase: "Hoy es un buen día para aprender"
Separa en un arreglo cada palabra
Crea una nueva frase basandote en la anterior que diga: "Hoy es un buen día"
 */