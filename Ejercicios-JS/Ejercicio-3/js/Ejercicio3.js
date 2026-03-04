let abece="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let frase="casa"
let paso=3


for (i=0;i<frase.length;i++) {
    console.log("Voy a buscar la letras: " + frase[i])
    let posicion=abece.indexOf  (frase[i])
    console.log("esta en la posicion: " + posicion)
    // para q sume paso a la posiccion de letra
    let nuevaposicion=posicion+paso
    let nuevaletra=abece[nuevaposicion]
    console.log("su nuevaletra es: " + nuevaletra)
}