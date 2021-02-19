/* JSON 
- è un formato per l'archiviazione e per il trasporto di dati;
- viene spesso utilizzato per lo scambio di dati tra il server e la pagina web;

Il formato JSON è sintatticamente identico al codice per la creazione di oggetti in Javascript.
A causa di questa somiglianza, un programma Javascript può facilmente convertire i dati JSON in oggetti JS nativi.

I dati JSON sono scritti come coppie nome/valore, costituite da un nome campo tra virgolette doppie, seguito da due punti
e da un valore.

"nome" : "John"
*/


/* CONVERSIONE DA FORMATO JSON IN UN OGGETTO JAVASCRIPT */

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//JSON.parse() converte la stringa in un oggetto Javascript
var obj = JSON.parse(text);

//Adesso posso usare il nuovo oggetto appena creato (stampo il secondo elemento della stringa, Anna Smith)
var nome2 = obj.employees[1].firstName + " " + obj.employees[1].lastName;
document.getElementById("demo").innerHTML = nome2;

/* CONVERSIONE DI UN OGGETTO O VALORE DA FORMATO JAVASCRIPT IN UNA STRINGA JSON */
/*
JSON.stringify(value[ , replacer[ , space]]);

- value: valore da convertire in stringa JSON (obbligatorio);
- replacer: una funzione che altera il processo di conversione, o un array di String e Number che contiene le proprietà dell'oggetto
che dev'essere specificato nella stringa JSON;
- space: un oggetto String o Number che viene utilizzato per inserire uno spazio bianco nella strings JSON ai fini di leggibilità
Se questo è Number, indica il numero di caratteri di spazio da usare come spazio bianco (da 1 a 10)
*/

//Creo un oggetto in Javascript
var session = {
    'screens': [],
    'state': true
  };
  session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
  session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
  session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
  session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
  session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
  session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });
  
  // Conversione della stringa JSON con JSON.stringify() quindi salva con localStorage nel nome della sessione
  localStorage.setItem('session', JSON.stringify(session));