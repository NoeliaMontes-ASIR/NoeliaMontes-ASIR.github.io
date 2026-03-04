let caracteres = "abcdefghijklmnopqrstuvwxyz";
 let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let caracteresNumeros = "0123456789";
 let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
let longitud = numeroAleatorio(8, 50)
let password = " "

 // devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = caracteres[numeroAleatorio(8, 50)]

let mayus = caracteresMayusculas[numeroAleatorio(1, 8)]

let numero = caracteresNumeros[numeroAleatorio(1, 2)]

let especial= caracteresEspeciales[numeroAleatorio(1, 2)]

for (let i = 0; i < longitud; i++) {
    let caracter = caracteres + caracteresMayusculas + caracteresNumeros + caracteresEspeciales;
    password += caracter[numeroAleatorio(0, caracter.length)];
}

//desordenar array
 password = password.split('').sort(() => Math.random() - 0.5).join('');

console.log(password)