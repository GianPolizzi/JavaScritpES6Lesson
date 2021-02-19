//I numeri vengono trattati sempre in modo generico come fossero dei float (con la virgola)

//CONVERSIONE DI STRINGHE IN NUMERI
let numStringa = '10';
parseInt(numStringa);
//oppure semplicemente:
+numStringa;

//Se voglio ottenere il tipo:
typeof parseInt(numStringa);

//Se voglio vedere il numero con la virgola:
let numStringaFloat = '10.5'
parseFloat(numStringaFloat);


//CONVERSIONE DI NUMERI IN STRINGHE
let numero = 6;
numero.toString();

//Conversione in binario, ottale, esadecimale
numero.toString(2);
numero.toString(8);
numero.toString(16);

//Se voglio conoscere il tipo:
typeof numero.toString();

//NaN (Not a Number)
isNaN(numStringa) //--> Ritorna false
isNan(numero)     //--> Ritorna true


//INFINITY
let divisione = 3 / 0; //--> Ritorna Infinity


//NUMERI BINARI, OTTARI ED ESADECIMALI
//Binario: 0b
let binario = 0b111;

//Ottario: 0o
let ottario = 0o3456;

//Esadecimale: 0x
let esadecimale = 0xFFAA;


//MANEGGIARE I NUMERI CON LA VIRGOLA IN SICUREZZA (FLOAT)
let somma = 0.1 + 0.2   //dovrebbe fare 0.3 ma in Javascript risulta 0.300000000004
//Per ovviare a questo problema:
let sommagiusta = 0.1 * 10 + 0.2 * 10;
sommagiusta / 10;       //risulta 0.3

