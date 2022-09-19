9
//calback

/*son funciones que se la pasan a otra como argumento,a una funcion puedo
mandarle como paramentro, argumento otra funcion, y que la ejecucion de la misma
dependa de la funcion que mande como argumento.
*/

//estructura
function cualquiera(rrr) {
  //acciones
}

function otracosa() {
  //acciones
}

cualquiera(otracosa());

//metodos de los arreglos

let alumnos = ['benja', 'pochi', 'tomas', 'dino', 'benja', 'benja']

let numeros = [144, 20, 2514, 1]

//find

//para encontrar un elemento en el arreglo

let busqueda = alumnos.find(function (alumno) {

  return alumno === 'benja'

})

//filter

//para encontrar todos los elementos de un arreglo que coicidan

let alumnosBenja = alumnos.filter(function (alumno) {

  return alumno === 'benja'

})

//map

//nos devuelve un arreglo nuevo y nos permite iterar un arreglo nuevo

let numerosCuadrados = numeros.map(function (numero) {
  return Math.pow(numero, 2)
})

//podemos solo iterar
//el index es otro agumento y representa la posicion de cada elemento en el arreglo(podemos agregarlo o no)

/* 

alumnos.map(function (alumno, index) {
  console.log(`${index + 1} - nombre: ${alumno}`)
})
*/

  //ejercicio practico 

  let peliculas = [
    "EL HOMBRE DE LA MÁSCARA DE HIERRO",
    "EL HOMBRE DE ACERO",
    "SPIDERMAN 2",
    "AVENGERS END GAME",
  ];

  //funcion para agreagar peliculas

  /*
  con el push estamos diciendo que cada vez que pongamos algo en el prompt se agregara al arreglo peliculas,
  el toUpperCase  para que se agreguen en mayusculas, y hacemos un ciclo while para que nos pregunte constantemente
  que pelicula queremos agregar.
  en el while, la condicion es (titulo) el ciclo se termina cada vez que sea un undefined o demos cancelar.
  */

  function agregarPelicula() {
    let titulo = prompt("Ingrese el título de la película 🎞️");
  
    while (titulo) {
      if (buscarPelicula(titulo)) {
        alert("La película ya existe");
      } else {
        peliculas.push(titulo.toUpperCase());
      }
      //verificar que la película no exista
      titulo = prompt("Ingrese el título de la película 🎞️");
    }
    listarPeliculas(peliculas);
  }
//funcion para listar peliculas

function listarPeliculas(arreglo) {
  if (arreglo.length > 0) {
    console.log("======Listado de películas======");
    arreglo.sort().map(function (item, index) {
      console.log(`${index + 1} - ${item}`);
    });
    console.log("=============================");
  } else {
    console.log("No hay películas para listar");
  }
}

//funcion para filtrar peliculas

/*
igualamos el parametro(termino) para que el usuario lo ingrese directamente por un prompt.
*/ 

//filtrar peliculas
function filtrarPeliculas(termino = prompt("Ingrese el término a buscar")) {
  let newPeliculas = peliculas.filter(function (pelicula) {
    return pelicula.includes(termino.toUpperCase());
  });

  if (newPeliculas.length > 0) {
    listarPeliculas(newPeliculas);
  } else {
    console.warn("No hay resultados para la búsqueda");
  }
}

//Función que evalua si una película existe

const buscarPelicula=function(titulo){

  let existePelicula = peliculas.find(function(pelicula){

    return pelicula === titulo.toUpperCase()

  })

 if (existePelicula) {

  return true
  
 }else{

  return false

 }
}

//borrar una pelicula

const borrarPelicula=function(){

  let titulo=prompt('ingrese la pelicula a eliminar')

  let indice=peliculas.indexOf(titulo.toUpperCase())

  if (titulo >=0) {

    let validar = confirm(`esta seguro que desea eliminar ${peliculas[indice]} ?`)

    if (validar) {
      peliculas.splice(indice, 1);
      alert("Película eliminada 🤙");
    }
  } else {
    alert("Película no encontrada 😞");
    
  }
}


//===========================================================

//juego piedra, papel o tijera
 
let opciones = ['PIEDRA', 'PAPEL', 'TIJERA']

//a las variables le doy un valor null, por que todavia no se a donde ni con que valor las voy a usar
let jugador = null
let bot = null

//funcion para que el bot eliga aleatoraiamente las opciones

/*
aplicamos matg, y con el round redondeamos para que no me de numeros decimales, y con el random
para que me de los numeros aleatoriamente
*/

function numeroRandom(){

  return Math.round(Math.random()*2)
}

//funcion para iniciar el juego

function playGame(){

//determinar valor para la variable bot

bot = numeroRandom()

//determinar valor para el jugador

jugador=parseInt(prompt('ingrese la opcion (PIEDRA = 0 | PAPEL = 1 | TIJERA = 2 )'))

//evaluamos que el usuario ingrese un numero, y no cualquier cosa
if(isNaN(jugador)){

  return alert('ingrese una opcion valida')

}

//evaluamos que las opciones sean correctas

if(jugador >=0 && jugador <=2){

//evaluamos los resultados, de los datos obtenidos por el jugador y el bot

switch (true) {
  case jugador ===0 && bot ===2:
    mensajeJuego("ganaste")
    break;

  case jugador ===1 && bot ===0:
    mensajeJuego("ganaste")
      break;

  case jugador ===2 && bot ===1:
    mensajeJuego("ganaste")
        break;

  case jugador === bot:
    mensajeJuego("empate")
          break;
  default:
    mensajeJuego("perdiste")
    break;
}
}else{
  alert('debe ingresar un valor correcto')
}

//para mostrar los resultados en consola
console.log(`Jugador: ${opciones[jugador]} | bot: ${opciones[bot]}`);

}

//funcion oara usar sweet alert

/*
reemplazamos en el swith de arriba el mensaje que retorna por la funcion del sweet alert
*/

const mensajeJuego=function(mensaje){

  switch (mensaje) {
    case "ganaste":
      Swal.fire({
        icon: "success",
        title: "GANASTE",
        text: `${opciones[jugador]} vence a ${opciones[bot]}`,
        footer: "intenta seguir ganando"
      })
      break;

      case "empate":
        Swal.fire({
          icon: "info",
          title: "EMPATE",
          text: `${opciones[jugador]} es igual a ${opciones[bot]}`,
          footer: "prueba suerte para la proxima"
        })
      break;

      case "perdiste":
        Swal.fire({
          icon: "error",
          title: "PERDISTE",
          text: `${opciones[bot]} vence a ${opciones[jugador]}`,
          footer: "prueba suerte para la proxima"
        })
      break;
  }
}