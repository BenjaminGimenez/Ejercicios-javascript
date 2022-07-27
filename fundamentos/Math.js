
//Math

let numero=25.55

//para redondear al valor minimo, lo redondea para abajo
console.log(Math.floor(numero))

//redomdeo segun valor decimal, si es menor de 5 para abajo. si es mayor a 5 para arriba
console.log(Math.round(numero))

//para redondear siempre para arriba
console.log(Math.ceil(numero))

//para obtener el max y minimo de una lista
console.log(`el numero maximo es ${Math.max(102,366,1000,8554,14,288)}`)

console.log(Math.min(102,366,1000,8554,14,288))

// ====================== //

let num= '29.458'

//parseInt --> convierto numero string en entero
console.log(parseInt(num))

//parseFloat --> convierto numero string a decimal
console.log(parseFloat(num))

//================//

let base = numero;
let exponente = 2;

//elevo un valor a la potencia --> primero la la base(el num) y desp al numero que quiero elevarlo
console.log(Math.pow(base, exponente));

//raiz cuadrada de un numero
console.log(Math.sqrt(64));

//obtener un numero aleatorio
console.log(Math.ceil(Math.random() * 10));

//obtener numero con dos decimales
num = parseFloat(num);
console.log(Math.round(num * 100) / 100);

//obtener numero con dos decimales
let decimal = parseFloat(num).toFixed(2);
console.log(parseFloat(decimal));
 