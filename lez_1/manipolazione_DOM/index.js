/**
 * Per manipolare il DOM dal file JS è sufficiente utilizzare "document" che
 * cerca l'elemento specificato all'interno del file HTML. Per interagire con i nodi principali:
 * 
 * - document.title = 'Nuovo Titolo'
 * - document.body = 'Nuovo body'
 * - document.anchors =
 * - document.forms = 
 * - document.head =
 * - document.images =
 * - document.links =
 * - document.scripts =
 * 
 * Per interagire con altri elementi della pagina, i metodi più comuni sono:
 * 
 * - document.getElementById('id');
 * - document.getElementsByTagName('div);
 * - document.getElementsByClassName('class');
 */


//Modifico il title
document.title = 'DOM modificato';


//Per visualizzare un nodo del DOM ed i suoi figli
console.log(document.title);
console.log(document.body);


//Modificare un tag preciso
let tagName = document.getElementsByTagName('div');
//Questo mi restituisce una HTMLCollection
console.log(tagName);
//Scelgo di modificare un solo elemento dell'HTMLCollection
tagName[1].innerHTML = 'nuovo nome tag';
//Per convertire questa Collection in array normale affinchè posso utilizzare i metodi, in ES6:
tagName = Array.from(tagName);


//Modificare una classe precisa
let className = document.getElementsByClassName('test1');
//Questo mi restituisce una HTMLCollection
console.log(className);


//Modificare un id preciso
let idName = document.getElementById('display');
//Questo mi restituisce un singolo oggetto, non una Collection
console.log(idName);
//Posso cambiare il suo testo
idName.innerHTML = 'Nuovo DOM display';
//Posso cambiare il suo stile come fosse un CSS
idName.style.color = 'red';
//Posso aggiungere un attributo: setAttribute(nome, tipo)
idName.setAttribute('dir', 'rtl');
//Posso modificare un attributo della classe
idName.className = 'nuovoTest1';


//********************** ATTRAVERSARE IL DOM: aggiungere un nodo al DOM **********************

//Creo un nodo a partire da un id esistente
let figlio = document.getElementById('display2');
figlio.innerHTML = '<p>Testo del figlio</p>';

//Creo un nodo in modo generico
let p = document.createElement('p');
//Inserisco del testo all'interno del nodo
let testoP = document.createTextNode('Testo del paragrafo');
//Appendi il figlio 'testoP' al padre 'p'
p.appendChild(testoP);
//Ora attacco 'p' al mio elemento 'div'
let display2 = document.getElementById('display2');
display2.appendChild(p);

//Accedo a più elementi 'p' contemporaneamente
let nodeList = document.querySelectorAll('p');
//Restituisce un NodeList (simile ad una Collection) che va poi convertito in Array JS
console.log(nodeList);

//Navigare tra gli elementi del DOM: parto da display e vado al primo paragrafo
let child = document.getElementById('display2').firstChild;
console.log(child);
console.log(child.nodeName);
console.log(child.firstChild.nodeValue);

//Lavoro con l'ultimo figlio
let ultimoChild = document.getElementById('display2').lastChild;
console.log(ultimoChild.firstChild.nodeValue);
