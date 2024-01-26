// Ottieni il numero di chilometri
let km = prompt("Inserisci il numero di chilometri che vuoi percorrere:");


// Ottieni l'età del passeggero
let eta = prompt("Inserisci l'età del passeggero:");

// Calcola il prezzo del biglietto prima dello sconto
let prezzoTotale = km * 0.21;
 


    // Se l'età è inferiore a 18, si applica uno sconto del 20%.
    // Se l'età è maggiore o uguale a 65, si applica uno sconto del 40%

    if (eta < 18 ) {
        prezzoTotale = prezzoTotale - (prezzoTotale / 100) * 20
    }

    if (eta >= 65) {
        prezzoTotale = prezzoTotale - (prezzoTotale / 100) * 40
    }

    document.getElementById("costoTicket").innerHTML = prezzoTotale.toFixed(2);
   

