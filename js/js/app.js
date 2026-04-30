// console.log("Hola mundo")
// console.log("adios")
// console.warn("ojo")
// console.error("lo has roto")

// let nombre= "Basilisco"
// let curso="ASIR"

// primero hay un let edad = 18 ese num es la edad que tendria la presona y debajo ya está el programa que dice si es mayor que
//  o menor aqui saldria que si puede beber al poner edad 18

// let edad = 18

// if (edad > 17) 
//     console.log("puede beber")
// else 
//     console.log("no puede beber") 

// if (edad > 17) 
//     console.log("puede beber")
// else {
//     if (edad > 12) console.log ("puedes beber café")
//     console.log("no puede beber") 
// }

// --------


// // console.log("Te llamas: " +nombre+ "y cursas: "  +curso )
// // nombre="julieta"
// // curso="Daw"

// // console.log("Te llamas: " +nombre+ "y cursas: "  +curso )

// if (edad >12 && edad <17) 
//     console.log("puede beber cafe")
// else
//     console.log("no puede beber cafe")

// // cadena="" (mejor hacerlo modo largo) 
// cadena = edad > 17 ? "Puedes beber" : "No puedes beber";
// console.log(cadena)

// --------

// ejmplo de hacer los numeros del 1-10 pero yendo de 1 en 1, si son hasta el mil, te mueres haciendolo

let num=0

console.log(num)
  num+=1
  console.log(num)
  num+=1
  console.log(num)
  num+=1
  console.log(num)
  num+=1
  console.log(num)
  num+=1
  console.log(num)
  num+=1
  console.log(num)
  num+=1
// ----------

// // escribir los num del 1 al 10

// while (num<=10) {
//     num++
//     console.log(num)
// }

// for (num=1;num <=10; num++){
//     console.log(num)
// }


// la funcion de abajo para nums aleatorios, si pongo solo el max me da uno, al pponerle tambien un for luego me da 10 nums aleatorios por ponerle 10

function damenumero(max) {
    let numero = Math.floor(Math.random() * max) + 1
    return numero
}
// suma dos numeros y devuelve el total
// function suma(a,b){
//     let total=a+b
//     return total
// }

// for (num = 1; num <= 10; num++)
//     damenumero(20)

// let misuma=suma(34,8999)
// console.log ("La suma es: " + misuma)

// para hacer el num de la loteria, quieres 6 aleatorios y sin repetir, y que llegue solo hasta el 49.

// let veces=1
// let numero=[]  //una lista
// while(veces<=6) {
//     veces++
//     let variable=damenumero(49)
//     if (numero.indexOf(variable)>-1){

//     }
//     numero.push(variable)
// }
//     console.log(numero)


// let abece="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let frase="casa"
// let paso=3


// // for (i=0;i<frase.length;i++) {
// //     console.log("Voy a buscar la letras: " + frase[i])
// //     let posicion=abece.indexOf  (frase[i])
// //     console.log("esta en la posicion: " + posicion)
// //     // para q sume paso a la posiccion de letra
// //     let nuevaposicion=posicion+paso
// //     let nuevaletra=abece[nuevaposicion]
// //     console.log("su nuevaletra es: " + nuevaletra)
// // }

// let totalcarac=""
// let caracteres="abcdefghijklmnopqrstuvwxyz" 
// let caracteresmayus="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let caracteresnum="0123456789"
// let caracteresesp="!@#$%&*()_+|~`={}[]:;'<>?,./"

// function numeroaleatorio(min,max) {
//     let numero=Math.floor(Math)
//     return numero
// }


// for (i=0; i<totalcarac.length; i++)

    