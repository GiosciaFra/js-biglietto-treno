 
 const sceltaUtente = prompt("Fai la tua scelta: carta, forbice o sasso").toLowerCase();

 const opzioni = ["carta", "forbice", "sasso"];
 const indiceScelta = Math.floor(Math.random() * 3);
 const sceltaComputer = opzioni[indiceScelta];

 document.getElementById("risultato").innerHTML =
  `
     <p>Il computer ha scelto: ${sceltaComputer}</p>
     <p>Tu hai scelto: ${sceltaUtente}</p>
  `;

 const risultato = (sceltaUtente === sceltaComputer) ? "Pareggio!" :
                   ((sceltaUtente === "carta" && sceltaComputer === "sasso") ||
                    (sceltaUtente === "forbice" && sceltaComputer === "carta") ||
                    (sceltaUtente === "sasso" && sceltaComputer === "forbice")) ? "Hai vinto!" :
                   "Il computer ha vinto!";

 document.getElementById("risultato").innerHTML += `<h1>${risultato}</h1>`;