//bucles

/* sirven para realizar cierta accion repetidas veces, pero que se repita
depende de la condicion que nosotros estemos dando */

//while 

//estructura

/*
while (condition) {
    
//acciones->hasta que 1 sea falsa y se corta

}
*/

//ejemplo practico

let vecesSumar=10
let totalSumar=0

while (vecesSumar>0) {

   totalSumar++
   vecesSumar--
   console.log(`total de la suma ${totalSumar} | veces que faltan sumar ${vecesSumar}`)

}

console.log(`total de la suma ${totalSumar}`)