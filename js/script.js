// Creiamo un finto biglietto del treno con: Nome passeggero, Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
// Categoria selezionata dall'utente


// Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
var generatesButton = document.getElementById('generates-btn');
generatesButton.addEventListener('click', function() {
    

    // Nome passeggero
    var  nomeDaInserire = document.getElementById('name-surname-required');
    var userName = nomeDaInserire.value;    
    
    document.getElementById('passenger-name').innerHTML = userName;

    //Offerta: confrontiamo input age e km per generare il prezzo del biglietto
    //
    //Abbiamo bisogno dell'età del passeggero
    var etaPasseggero = document.getElementById('age-required');
    var passengerAge = etaPasseggero.value;
    console.log(passengerAge)

    //
    // abbiamo bisogno di saper il numero di km che vuole percorrere
    var kmInput = document.getElementById('km-required');
    var kmUtente = kmInput.value;
    var kmUtenteNumber = parseInt(kmUtente);
    console.log(kmUtenteNumber);

    // fare il calcolo del prezzo e inserirlo
    var prezzoBiglietto = kmUtenteNumber * 0.21;  
    
    // 
    // calcolare il prezzo differente in base all'età e stabilire l'offerta

    if ( passengerAge == 'minorenne' ) {

        prezzoBiglietto = prezzoBiglietto -(prezzoBiglietto * 0.2);

    } else if( passengerAge == 'over') {

        prezzoBiglietto = prezzoBiglietto -(prezzoBiglietto * 0.4);
    }
    document.getElementById('final-price').innerHTML = prezzoBiglietto.toFixed(2) + '€';




    
     
    
 
     

    //numero carrozza
    
})

// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.