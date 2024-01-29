
let numero1 = Number(prompt("Inserisci il primo numero:"));
let numero2 = Number(prompt("Inserisci il secondo numero:"));
let numero3 = Number(prompt("Inserisci il terzo numero:"));

let media = (numero1 + numero2 + numero3) / 3;

document.getElementById("media").innerHTML = ("La media dei tre numeri è: " + media.toFixed(2));
