// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.


$(document).ready(function (){
    
    var studente = {
         "nome" : "Dario",
         "cognome" : "Tedeschi",
         "eta" : "34",
    };

    for (var key in studente) {
         console.log(studente[key]);
    };

    var aula = [
    {
        "nome" : "Franco",
        "cognome" : "Franchi",
        "eta" : "34",
    },
    {
        "nome" : "Carlo",
        "cognome" : "Carli",
        "eta" : "34",
    },
    {
        "nome" : "Luca",
        "cognome" : "Luchi",
        "eta" : "34",
    }
    ];

    for (var dati in aula){
        console.log(aula[dati]);
    };

   
    var nome = prompt("Nome Studente");
    var cognome = prompt("Cognome Studente");
    var età = parseInt(prompt("Età Studente"));
    
    var nuovoStudente = nome + cognome + età;

    aula.push(nuovoStudente);
    console.log(aula);

});