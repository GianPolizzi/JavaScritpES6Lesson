//Oggetto MAP: utile per fare una collezione di coppie chiave / valore

//Creo l'istanza dell'oggetto
const mapObj = new Map();
//Inserisco alcune coppie chiave/valore con il metodo set
mapObj.set('chiave1', 123);
mapObj.set('chiave2', 456);
mapObj.set('chiave3', 789);

//Altro metodo per creare un'istanza dell'oggetto con elementi all'interno
const mapObj2 = new Map([
    ['chiave1', 12],
    [100, 'due'],
    ['prop3', 'blabla']
])

//Controllo la dimensione
console.log(mapObj.size);
console.log(mapObj);

//Elimino un elemento
mapObj.delete('chiave2');
console.log(mapObj.size);
console.log(mapObj);

//Per vedere se è presente un elemento (true/false)
console.log(mapObj.has('chiave1'));

//Per cancellare tutto il contenuto
mapObj.clear();
console.log(mapObj.size);





//Oggetto SET: utile per fare una collezione di valori unici

//Creo l'istanza dell'oggetto
const setObj = new Set();

//Aggiungo valori
setObj.add('rosso');
setObj.add('verde');
setObj.add('giallo');
setObj.add('viola').add('fucsia').add('indaco');

//Quanti e quali elementi
console.log(setObj.size);
console.log(setObj);

//Eliminare elementi
setObj.delete('viola');
console.log(setObj.size);
console.log(setObj);

//Eliminare tutti gli elementi
setObj.clear();
console.log(setObj.size);

//Altro metodo per creare un oggetto Set
const setObj2 = new Set([
    'red',
    'green',
    'yellow'
]);

//Quanti e quali elementi
console.log(setObj2.size);
console.log(setObj2);

//Unisco 2 array eliminando i doppioni (SET accetta elementi univoci)
const array1 = [1,2,3,4];
const array2 = [3,4,5,6,];
const setArr = new Set([...array1, ...array2]);

console.log(setArr.size);