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
         "Nome" : "Dario",
         "Cognome" : "Tedeschi",
         "Eta" : "34",
    };

    for (var key in studente) {
         console.log(key + ": " + studente[key]);
    };

    var aula = [
    {
        "Nome" : "Franco",
        "Cognome" : "Franchi",
        "eEta" : "34",
    },
    {
        "Nome" : "Carlo",
        "Cognome" : "Carli",
        "Eta" : "34",
    },
    {
        "Nome" : "Luca",
        "Cognome" : "Luchi",
        "Eta" : "34",
    }
    ];

    for (var dati in aula){
        console.log((aula[dati]["Nome"]) + " " + (aula[dati]["Cognome"]));
    };

    studente.Nome = prompt("Nome Studente");
    studente.Cognome = prompt("Cognome Studente");
    studente.Eta = parseInt(prompt("Età Studente"));
    
    aula.push(studente);
    console.log(aula);

});