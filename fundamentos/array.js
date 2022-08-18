//arrays o arreglos

//listas de datos

//Es una estructura de datos que tiene un tamaño fijo.

//Estructura de arreglo

let amigos = ['lucas', 'pochi', 'messi', 'tomas']

//para saber cuantos elementos tengo en un arreglo: LENGTH
console.log(amigos.length)

//para obtener un elemento del arreglo
console.log(amigos[2])

//para obtener el ultimo elemento
console.log(amigos[amigos.length-1]) 

//para obtener los elementos del arreglo y convertirlos en un string
console.log(amigos.join(' '))

//iterar un arreglo
/*me permite entrar elemento por elemento y devolver un mensaje */
for (let i = 0; i < amigos.length; i++) {

    console.log(`Bienvenido ${amigos[i]}`)

}

//otra forma de iterar
for (const amigo of amigos) {
    console.log(`Bienvenido querido ${amigo}`)
}

//agregar elementos al final del arreglo
amigos.push('dino', 'zami')
console.log(amigos)

//agregar elementos al principio del arreglo
amigos.unshift('julian')
console.log(amigos)

//para eliminar el ultimo elemento
amigos.pop()
console.log(amigos)

//para eliminar el primer elemento
amigos.shift()
console.log(amigos)

//eliminar un elemento por su posicion
const pos=3
amigos.splice(pos, 1)

//obtener un elemento por su posicion
console.log(amigos.indexOf('messi'))

//saber si un elemento existe en el arreglo
console.log(amigos.includes('tomas'))

//para modificar un elemento del arreglo ---> con el splice aparte de borrar podemos modificar datos
amigos.splice(1,1,'viejo')
console.log(amigos)

//concatenar 2 arreglos
const amigas=['flaca', 'memi','anita', 'agus']

const grupo=amigas.concat(amigos)
console.log(grupo)

//ordernar alfabeticamente un arreglo
console.log(grupo.sort())

//ordenar de Z - A
console.log(grupo.reverse())

//arreglo de numeros
//para ordenar de menor a mayor un arreglo de numeros
let numeros=[154, 25, 48, 1110, 6, 487, 1579]

console.log(numeros.sort(function(a, b){
  return a - b
}))