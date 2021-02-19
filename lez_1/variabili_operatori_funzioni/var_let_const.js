/**************************************** VARIABILI *******************************************/

//VARIABILE GLOBALE
var variabileglob = 5;
var variabileglob1 = 19, variabileglob2 = 17, variabileglob3 = 'stringami', variabileglob4 = [];

variabileglob = 23; 


//VARIABILE LOCALE: differisce da var se la si usa dentro lo scope di una funz.
//Limita la visibilità ad un blocco di codice
let letVar = 13;
let letVar1 = 'bimba', letVar2= [], letVar3;

letVar = 25;
letVar = 'cambioNumeroInStringaNessunProblema';
letVar = function() {}; //Posso sovrascrivere a letVar anche una funzione


//COSTANTE: il suo valore non può essere cambiato
const valCostante = 100;

//Doppio array
const double_array = ['Milano', 123, ['a','b',99]];

//Matrice
const matrice = [[1,4,7],[8,9,2][76,21,3]];

//Per accedere all'elemento 9
var elem9 = [1][1];

//Per accedere all'elemento 8
var elem8 = [1][0];

//Se creo un array posso cmq cambiare o aggiungere i valori all'interno
const ARR = [];
ARR[0] = 200;
ARR[3] = 'ciao'

//UNDEFINED: non ha un valore definito
let primaVariabile;

//NULL: nessun oggetto quindi inizializzo l'oggetto oppure l'array a null
let valoreVuoto = null;