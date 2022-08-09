//Estructuras de control

//switch

/*
evalua una expresion y la compara con diferentes casos que vamos planteando,
y si alguno de esos casos se cumple, se ejecutara la accion.
*/ 

//estructura de switch

/*key => una declaracion para evaluar | case valeu => valor de la declaracion, si esto de cumple,
se realiza una accion, en caso de no ser asi, se realiza una accion por defecto
*/

/*switch (key) {
    case value:

        //acciones

        break;

        case value:

        //acciones

    default:

        //acciones por defecto

        break;
}
*/

//ejemplo practico 

/*let frutas = prompt('ingrese las frutas que desea comprar')

switch (frutas) {
    case 'Manzanas':
        console.log(`el kilo de Manzanas cuesta $200`)
        break;

    case 'Bananas':
            console.log(`el kilo de Bananas cuesta $250`)
        break;

    case 'Peras':
        console.log(`el kilo de Peras cuesta $230`)
        break;

    case 'Frutillas':
        console.log(`el kilo de Frutillas cuesta $300`)
        break;

    case 'Mangos':
    case 'Naranjas':
        console.log(`el kilo de Mangos y Naranjas cuesta $240`)
        break;

    default:
        console.log(`en estos momentos no contamos con esas frutas`)
        break;
}
*/

//ejemplo practico

let diaHoy=new Date().getDay()

switch (diaHoy) {
    case 0:
        console.log('hoy es domingo 😒')
        break;

    case 1:
        console.log('hoy es lunes 😴')
        break;

    case 2:
        console.log('hoy es martes 😣')
        break;

    case 3:
        console.log('hoy es miercoles 😥')
        break;

    case 4:
        console.log('hoy es jueves 😏')
        break;

    case 5:
        console.log('hoy es viernes 😜')
        break;

    case 6:
        console.log('hoy es sabado 😎')
        break;
}

//no lleva un valor por defecto por que no hace falta

//ejemplo practio

/* en este caso para poder aplicar una condicion, en el lugar de la key en vez
de poner la variable, le ponemos el valor true para decirle que ejecute el comando 
que le pedimos */

let num=20

switch (true) {
    case num>10 && num<50:
        console.log(num+100)
        break;

    case num<0:
        console.log(num+1)
        break;

    default:
        console.log('no me importa tu numero')
        break;
}

//ejemplo practico

let comando=prompt('ingrese un comando(alerta, consola, pantalla)')

switch (comando) {
    case 'alerta':
        alert('usando switch en un alert')
        break;
        
    case 'consola':
        console.log('usando switch en la consola')
        break;

    case 'pantalla':
        document.write('usando switch en la pantalla')
        break;
    
    default:
        console.error('este comando es invalido')
        break;
}