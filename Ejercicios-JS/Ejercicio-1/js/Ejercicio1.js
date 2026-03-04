let num_caras = 6;
function dameNumero(num_caras) {
    let numero = Math.floor(Math.random() * num_caras) + 1;
    return numero;
}
let resultado = dameNumero(num_caras);

console.log(resultado);