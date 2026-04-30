let numero=document.getElementById("numero1")
let numero2=document.getElementById("numero2")

let solucion=document.getElementById("solucion")

let run=document.getElementById("run")

// lo de abajo sirve para multiplicar los dos buttons, el click es cuando quieres que al pulsar el buton haga lo que le has dicho dentro de las llaves.
// en el let, el valor solcuion no puede ser el mismo que el valor de dentro de los parentesis. 
// para sumar tienes quwe indicarle que es un numero el valor que vas a meter para sumar, sino, lo concatena. sino no pones nada solo los parentesis.

// run.addEventListener("click",(e) => {
//     let solucion= parseInt(numero.value) + parseInt(numero2.value)
//     console.log(solucion)
// })


// console.log("Estoy en java script"+numero.value)

// escribe el valor Izq el numero de veces del valor Der.

// Hacemos un for poruqe tiene que ser un bucle, para que se repita x veces, se  hace un let cadenatotal"" para meter dentro los numeros que que vayas a poner en el bucle
run.addEventListener("click",(e) => {
    let num= (numero.value)
    let num2= (numero2.value)
    let cadenatotal = " "
    for(let i=0;i<num2;i++){
        cadenatotal=cadenatotal+num+"<br>"
        console.log(num)
    }
    solucion.innerHTML=cadenatotal
})

