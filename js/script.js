// Creiamo un finto biglietto del treno con: Nome passeggero, Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
// Categoria selezionata dall'utente
// Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.

var generatesButton = document.getElementById('generates-btn');
generatesButton.addEventListener('click', function() {
    alert('cliccato');
})