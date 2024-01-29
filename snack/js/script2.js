
let temperaturaCelsius = prompt("Inserisci la temperatura in gradi Celsius:");

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

document.getElementById("temperaturaFahrenheit").innerHTML = ("La temperatura in gradi Fahrenheit è: " + temperaturaFahrenheit.toFixed(2));
