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

    // Calcolo prezzo in base ai km
    var prezzoBiglietto = kmUtenteNumber * 0.21;
    //
    // Offerta in base all'età
    
    var offertaPasseggeri = 'Prezzo Standard' 
    
    // 
    // Prezzo differente in base all'età e stabilire l'offerta

    if ( passengerAge == 'minorenne' ) {
        offertaPasseggeri = 'Sconto Minorenni'
        prezzoBiglietto = prezzoBiglietto -(prezzoBiglietto * 0.2);

    } else if( passengerAge == 'over') {
        offertaPasseggeri = 'Sconto Over 65'
        prezzoBiglietto = prezzoBiglietto -(prezzoBiglietto * 0.4);
    }


    // Carrozza
    var numeroCarrozza = Math.floor(Math.random() * 10) + 1;

    // Codice CP
    var cpCodeElement = getRndInteger(90000,100000);
    

    // OUTPUT
    document.getElementById('passenger-name').innerHTML = userName;
    document.getElementById('user-offer').innerHTML = offertaPasseggeri; 
    document.getElementById('cab-number').innerHTML = numeroCarrozza; 
    document.getElementById('cp-code').innerHTML =  cpCodeElement;
    document.getElementById('final-price').innerHTML = prezzoBiglietto.toFixed(2) + '€';
    
      
    
})

// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }