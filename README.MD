1. Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
2. Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

1. INPUT
    - [ ] Chiediamo all'utente il numero di chilometri che vuole percorrere tramite input
    - [ ] Chiediamo all'utente la sua età tramite input
    - [x] Impostiamo la quota fissa di 0.21€ al km


2. . ESECUZIONE LOGICA
    - [x] Calcoliamo l'importo base che l'utente dovrà facendo la moltiplicazione tra il numero di kilometri selezionati e la quota fissa di euro al kilometro.
    - [x] Calcoliamo lo sconto in base alla fascia di età:
        - Se (l'età dell' utente è inferiore ai 18 anni)
            + calcoliamo lo sconto del 20% sull'importo base. (Questo valore verrà successivamente utilizzato per fare il calcolo dell'importo finale).
        - Altrimenti se (l'età dell'utente è compresa tra i 18 e i 65 anni)
            + Non verrà applicato nessuno sconto al prezzo finale
        - Altrimenti (l'età dell' utente supera i 65 anni)
            + calcoliamo lo sconto del 40% sull'importo base. (Questo valore verrà successivamente utilizzato per fare il calcolo dell'importo finale).
    - [x] Applichiamo lo sconto all'importo finale.
    - [x] Arrotondiamo l'importo finale a due cifre significative dopo la virgola.

3. OUTPUT
    - [ ] Stampiamo il prezzo finale in base all' informazioni fornite da utente