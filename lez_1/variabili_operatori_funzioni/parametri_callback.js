//PARAMETRI PASSATI PER VALORE
let num = 10;

function prima(x){
    x = x - 5;
    console.log(x);
}

//Questa mi restituisce 5
prima(num);
//Questa mi restituisce 10 perchè il mio num al di fuori della funzione è rimasto intatto
console.log(num);


//OPERATORE REST
//- rappresentato dai 3 puntini all'interno delle parentesi tonde della funzione;
//- da non confondere con l'operatore <<spread>>
//- raggruppa tutti gli argomenti in eccesso e li compatta dentro un array;
function seconda(x, ...y){
    console.log(Array.isArray(y));
    console.log(x); //primo parametro
    console.log(y); //tutti gli altri parametri (numero variabile)
}
seconda(10, 20, 30, 120, 30000);


//CALLBACK
//Funzioni passate come parametri
//Usate in presenza di codice che lavora in maniera asincrona:
// - se sto lavorando con dati che vengono prelevati dal server;
// - se devo aspettare l'elaborazione di un dato prima di usarlo;

function test(x){
    return x * x;
}
console.log(test(10));
//Per visualizzare il codice della funz. test(): passo una funz. come parametro
console.log(test);

function principale(x, callbackTest){
    console.log('Valore di x = ', x);
    console.log(callbackTest(50));
}

principale(5, test);

//Output:
//Valore di x = 5
//2500
