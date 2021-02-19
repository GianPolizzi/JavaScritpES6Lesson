/* ESPRESSIONE REGOLARE
Sequenza di simboli (stringa) che identifica un insieme di stringhe,
utile nella programmazione per identificare parti specifiche all'interno di contesti */

//OGGETTO REGEXP
let testo = document.getElementById('oggettoRegExp').innerHTML;
//Espressione regolare creata usando il metodo letterale: cerco la 'o'
let pattern0 = /o/;

//Espressione regolare creata usando l'oggetto RegExp: cerco la 'o'
let alternativa = new RegExp('o');


//METODI

//Metodo test(): ritorna true se trova una corrispondenza del pattern nel testo
console.log(pattern0.test(testo));  //true
console.log(/w/.test(testo));       //false

//flags: i g m (ES6)
//Restituisce true se trova la 'A' o 'a' all'interno del testo
// - i : insensitive, va bene sia maiuscola che minuscola;
// - g : global, 
console.log(/A/i.test(testo));
//Restituisce true se trova la 'AI' o 'ai' all'interno del testo
console.log(/ai/i.test(testo));

//Oggetto RegExp('elemento da cercare nel testo', flag)
let pattern1 = new RegExp('[rst]', 'i');
//restituisce true se c'è almeno una delle 3 lettere specificate tra '[]'
console.log(pattern1.test(testo));

let pattern2 = new RegExp('[0-5]', 'i');
//restituisce true se c'è almeno un numero compreso tra 1 e 5'
console.log(pattern2.test(testo));


//Metodo search():
//ritorna l'indice in cui trova la corrispondenza del pattern oppure -1
console.log(testo.search(/o/));


//Metodo exec():
//ritorna un oggetto con le informazioni riguardo alla ricerca oppure null
console.log(/mon/.exec(testo));
console.log(/won/.exec(testo));

//Metodo match():
// - essenzialmente è uguale a match;
// - se specifico anche la 'g' mi ritorna un array col numero di volte che ha trovato
//l'elemento specificato all'interno del contesto;
console.log(testo.match(/mon/));
console.log(testo.match(/m/g));

//Metodo delle stringhe replace():
// - rimpiazza quello che specifico nel primo argomento con quello che specifico nel secondo
let newTesto = testo.replace('mo', 'La');

let newTesto1 = testo.replace(/Pia/i, 'mo');