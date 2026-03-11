let veces=1
let numero=[]  //una lista
function dameNumero(max) {

    let num = Math.floor(Math.random() * max) + 1;
    return num;
}

while(veces<=6) {
    veces++
    let variable=dameNumero(49)
    if (numero.indexOf(variable)>-1){

    }
    numero.push(variable)
}
    console.log(numero)
