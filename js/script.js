// test
// alert("ciao")


//Gestione pulsante nella pagina
// Trovo il mio bulsante nella pagina
const sendBtn = document.getElementById("send-btn"); //object | null
// Log della console
console.log(sendBtn, typeof sendBtn)

// Test sul bottone
// Gestione degli input del form
sendBtn.addEventListener("click", function () {

    // RACCOLTA DATI
    const userAgeElem = document.getElementById("userAge"); // object | null
    console.log(userAgeElem, typeof userAgeElem);

    const userAge = parseInt(userAgeElem.value); // number
    console.log(userAge, typeof userAge);

    const numKmElem = document.getElementById("distanceKm"); // object | null
    console.log(numKmElem, typeof numKmElem);

    const numKm = parseInt(numKmElem.value); // number
    console.log(numKm, typeof numKm);

    // Valore euro per km
    const valEurKm = 0.21; //number
    // Log della console
    console.log(valEurKm, typeof valEurKm);

    // OPERATION
    // Calcolo del totale che l'utente dovrà pagare non soggetto a sconti
    let calcTot = numKm * valEurKm; //number
    // Log della console
    console.log(calcTot, typeof calcTot);

    // Calcolo sconto per fascia di età
    let discountValue  //number | null

    if (userAge < 18) {
        discountValue = calcTot * 0.20;
    } else if (userAge >= 18 && userAge < 65) {
        discountValue = 0;
    } else {
        discountValue = calcTot * 0.40;
    }

    // Log della console
    console.log(discountValue, typeof discountValue);

    // Calcolo totale dopo applicazione sconto
    let finalPrice = calcTot - discountValue; //number | null
    // Log della console
    console.log(finalPrice, typeof finalPrice);

    // OUTPUT
    // Display dell'importo finale con solo due cifre dopo la virgola
    let finalPriceToFix = finalPrice.toFixed(2); //string | null
    // Log della console
    console.log(finalPriceToFix, typeof finalPriceToFix);

    // Creiamo il messaggio per l'utente finale
    const userMSG = `L'importo finale da pagare è di ${finalPriceToFix}`; //String | null
    console.log(userMSG, typeof userMSG);

    // Stampiamo il messaggio che vedrà l'utente
    document.getElementById("result").innerHTML = userMSG;
})