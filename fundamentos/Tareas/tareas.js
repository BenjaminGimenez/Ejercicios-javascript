
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

//========================================================

//practica de FUNCIONES

/*
-Crear una función llamada agregarProducto que pida al usuario ingresar un producto y lo guarde en un arreglo.

-Se puede hacer que la función pida ingresar productos una y otra vez hasta que se presione cancelar en el prompt o se deje vacio el campo y se presione aceptar.
Al final la función debe mostrar por consola la lista de los productos ingresados.
*/

let productos = ['jabon', 'aceite', 'detergente', 'azucar']

//agregando productos
function agregarProducto(){
    let producto = prompt('ingrese el nombre del producto que desee agregar')

    while (producto) {

        productos.push(producto)

        producto = prompt('ingrese el nombre del producto que desee agregar')
    }   
    listarProductos(productos)
    }

//listando productos
/*
para que sea una funcion reeutilizable, ponemos como argumento un arreglo, que seria el arreglo de productos 
que ya tenemos, arreglo.length < 0 ---> estamos preguntando si existe algo dentro del arreglo.

usamos la funcion despues del while de la primera funcion asi, cuando ejecute, me liste los productos una vez
despues de agregarlos.

*/
function listarProductos(arreglo){

if(arreglo.length > 0){
    console.log('======listado de peliculas========')
    
    arreglo.map(function(item, index){
        console.log(`${index + 1} - ${item} `)
    })

    console.log('========================')
}else{
    console.log('no hay productos para agregar')
}
}

//filtrando productos
function filtrarProductos(termino=prompt('ingrese el producto que desee buscar')){

    let newProductos = productos.filter(function(productito){
        return productito.includes(termino)
    })

    if(newProductos.length > 0){

        listarProductos(newProductos)

    }else{
        console.warn('no hay resultados en su busqueda')
    }
}

//===========================================================


/*
-Crear una función anónima que reciba como parámetros nombre, apellido, domicilio y correo electrónico.

-La función debe recibir los parámetros y mostrar en el navegador el siguiente mensaje: 'Me llamo <nombre>
 <apellido> vivo en <domicilio>, si deseas contactarme te dejo mi correo electrónico <email>. Que tengas un buen día.
Para mostrar texto en el navegador debemos usar document.write()
*/







//practica de ARREGLOS Y FUNCIONES

/*
- Crear una aplicación con javascript de un carrito de compras

- La aplicación debe poder hacer lo siguiente:

- Agregar productos al carrito (agregarlos hasta que se cancele el prompt)

- Eliminar un producto del carrito (recibe el nombre del producto a eliminar)

- Filtrar elementos del carrito según una palabra o término ingresado

- Listar todos los productos que estén en el carrito en orden alfabético
Adjuntos
*/

//CARRITO DE COMPRAS

let regalos = ['pelota', 'peluche', 'camiseta de futbol', 'figura de accion']

//agregar regalos

function agregarRegalos (){

    let regalitos = prompt('agregue al carrito los regalos que sea comprar')

    while(regalitos){

        regalitos.push(regalos)

        regalitos = prompt('agregue al carrito los regalos que sea comprar')

    }

}



