

//objetos =====================

//estructura

/*
los objetos pueden tener propiedades y metodos, y al mismo tiempo realizar acciones,
A diferencia de los arreglos, los objetos van dentro de llaves {}
*/

let persona = {

    //propiedades
    nombre:"Benjamin",
    apellido:"Gimenez",
    direccion:"Fortunata Garcia 824",
    ciudad:"Tucuman",

    //metodos

    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
      }
}

/*
el THIS hace referencia al objeto, en este caso persona, es una palabra reservada de JS, lo uso siempre dentro del objeto.
*/

//cambiar el valor a una propiedad
persona.nombre="Mariano"

//agregar una propeidad al objeto
persona.edad=25

//borrar una propiedad
delete persona.saludar

//para recorrer las propiedades de un objeto
/* for in: KEY representa a las propiedades del objeto */

for (const key in persona) {

    console.log(`${key}: ${persona[key]}`)
    
    }

//arreglo de objetos
let cursos = [
    { id: 1, titulo: "Javascript para principiantes", precio: 2500 },
    { id: 2, titulo: "HTML introducción", precio: 1500 },
    { id: 3, titulo: "CSS diseño responsive", precio: 2000 },
    { id: 4, titulo: "Bootstrap 5 grillas responsive", precio: 2100 },
  ];

  //iterando un arreglo de objetos
  cursos.map(function (curso) {
    console.log(curso.titulo);
  });
  
