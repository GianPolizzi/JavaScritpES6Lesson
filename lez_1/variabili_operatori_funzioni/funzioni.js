//TIPI DI FUNZIONI

/********************************** Declaration functions ******************************/

//Forma canonica
function funzSemplice(){
    //Scope della funzione
    console.log('Hello world');
}
funzSemplice();


//Forma canonica senza parametri
function saluta() {
    var eta = 30;
    let name = 'John';
    let surname = 'Rambo';
    console.log("Ciao: "+name+ " "+surname+ " la tua età è: "+eta+ " anni");
}
saluta();


//Forma canonica con parametri e valore di ritorno
function funzSemplice1(param1, param2){
    //Scope della funzione

    return;
}
//Richiamo la funzione passando gli argomenti
miaFunzione(arg1, arg2);


//Dichiarazione di una funzione con parametri di default
function moltiplica(param1, param2 = 5){
    console.log(param1 * param2);
}

//Il secondo argomento sovrascrive al param 5
moltiplica(7,4);

//Qui viene letto il primo arg mentre il secondo rimane di default 5
moltiplica(3);


//Esercizio
function infoPersona(nome, anni){
    let mesi = anni * 12;
    let giorni = mesi * 30;
    let stringaOut = `Ciao mi chiamo ${nome} ed ho ${anni} anni, ${mesi} mesi e ${giorni} giorni.`
    return console.log(stringaOut);
}

infoPersona('Gianmarco', 28);


/********************************** Expression functions ****************************+*/

//Non occorre che do un nome alla funzione
let variabileFunz = function(){}

variabileFunz();


/*********************************** Arrow functions ***********************************/

//Funzione anonima semplice (molto usata per le callback)
() => {}


/*********************************** Method function ***********************************/

//Oggetto con metodo come propietà
let oggetto = {
    prop: function(){}
};
oggetto.prop();


/************************************ Constructor functions ****************************/

//Ormai in disuso
let esempio = new Function(console.log('Hello world!'));


/************************************ IIFE functions ***********************************/

//Particolari funzioni che vengono dichiarate ed invocate contemporaneamente
(function(){console.log('Ciao Mondo')})(
    //Passo i parametri che voglio
)
