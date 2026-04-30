let num=document.getElementById("numero")
let boton=document.getElementById("boton")
let resultado=document.getElementById("resultado")
let total=0
let numeros=[]


function suma(a, b) {
    return parseInt(a) + parseInt(b)
}

const suma2=(a,b) => { a+b }

boton.addEventListener("click", (e) => {
    console.log("me han hecho click")
    total=suma(total,num.value)
    resultado.innerHTML=total
    numeros.push(num.value)
    resultado.innerHTML=numeros + ". total: " + total
})