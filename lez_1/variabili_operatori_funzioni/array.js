//Array (in JS è un oggetto)
let array = [];

//Array misto: posso mettere quello che voglio
let arrayMisto = ['stringa', 34, true, function(){}, {}, []];

//Per accedere agli elementi dell'array (modifica)
arrayMisto[1] = 90;

//Per inserire elementi dentro un array
arrayMisto[10] = 200;
//in questo modo sto anche creando 4 spazi vuoti

//Inserire un elemento alla fine dell'array
let arrayNum = [1,2,3,4];
arrayNum[array.length] = 5;
//oppure
arrayNum.push(6);

//Inserire un elemento all'inizio dell'array
arrayNum.unshift('inizio da zero');

//Eliminare l'ultimo elemento dell'array
arrayNum.pop();

//Eliminare il primo dell'array
arrayNum.shift();

//Azzerare array
arrayNum = [];

//Ciclare array
let arrayNuovo = [2, 4, 54, 67];
arrayNuovo.forEach(function(elem,index){
    console.log('Elemento: '+elem+' di indice: '+index);
})

//Concatenare array
let arrayCasuale1 = [1, 50, 10, 108, 2390];
let arrayCasuale2 = [4, 'boh', function(){}];
let arrayUnione = arrayCasuale1.concat(arrayCasuale2);
//Oppure uso l'operatore spread (spalmare):
//scompatta l'array nei suoi elementi e li mette dentro l'array
arrayCasuale1.push(...arrayCasuale2);

//Rimuovere elementi ed aggiungerne altri
//splice(valore da cui parto, quanti ne voglio eliminare, cosa voglio aggiungere da quel punto in poi)
arrayCasuale1.splice(1,2, 'bimba', 28);   //elimino 50 e 10

//ORDINARE ARRAY
//stringhe (ordine alfabetico)
let parole = ['calcio', 'basket', 'hokey', 'pool'];
parole.sort();

//numeri (ordine crescente)
let numeri = [90, 23, 5, 9, 2];
numeri.sort(function(a, b){
    return a - b
})

//numeri (ordine decrescente)
numeri.sort(function(a, b) {
    return b - a
})


//Rest Parameter
function calcola(operazione, mess, ...argomenti){
    console.log(operazione);
    console.log(mess);
    console.log(argomenti);
}
calcola('+', 'sei un mostro',2,3);