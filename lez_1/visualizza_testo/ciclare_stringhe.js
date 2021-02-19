/***************************************** STRINGHE *******************************************/

//Diversi modi per definire una stringa
var stringa1 = 'Stringa con apici';
var stringa2 = "Stringa con virgolette";
var stringa3 = `Stringa con backtick`;

//Dentro le stringhe si può inserire qualsisasi tipo di tag HTML
let stringaHtml = 'Ciao,<br>mi chiamo <b>Gianmy</b>';

//Definisco un array di stringhe
const citta = ['Catania', 'Palermo', 'Trapani'];

//Stampo tutti gli elementi dell'array
console.log(citta);

//1. Stampo ad uno ad uno tutti gli elementi dell'array
//Qui VAR la vedo da ovunque nella pagina
for(var i=0; i<citta.length; i++){
    console.log(i);
}
//Qui stampa Trapani, ovvero l'ultimo elemento dell'array
console.log(i);


//2. Stampo ad uno ad uno tutti gli elementi dell'array
//Qui LET la vedo solo nel ciclo for
for(let i=0; i<citta.length; i++){
    console.log(i);
}
//Qui non riconosce la variabile let!!!
console.log(i);

/***************************************** OGGETTI *******************************************/

//Definisco un oggetto
const obj = {
    nome : 'Gianma',
    cognome : 'Polizzi',
    eta : 28
};

//Stampo a video l'oggetto
console.log(obj.nome +" "+ obj.cognome + ", anni: " + obj.eta);
