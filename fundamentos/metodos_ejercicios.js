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

alumnos.map(function (alumno, index) {
  console.log(`${index + 1} - nombre: ${alumno}`)
})

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