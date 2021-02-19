/* CREO UN'INTERFACCIA FETCH DA ZERO
Avvolgo e manipolo la chiamata AJAX classica mediante una Promise
Metodo utilizzato quando il Browser non supporta la "fetch API""
*/


//Creo un oggetto $ come si usa nel AJAX
let $ = {
    //Definisco una propietà 'get' che è una funzione
    get: function(url){
        let p = new Promise(function(resolve,reject){
            let xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.send();
            xhr.onreadystatechange = function(){
                //readystate ritorna lo status di risposta del server a cui faccio la chiamata
                //Lo status ritornato può avere valori compresi tra 0 e 4 (4 = DONE)
                if(xhr.readyState === 4){
                    //status ritorna lo status del server: 200 OK (404 Not Found, ecc.)
                    if(xhr.status === 200){
                        //Risolvo la Promise
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        //Non risolvo la Promise
                        reject('Errore server...');
                    }
                }
                else{
                    //Il server non è pronto
                    console.warn('Il server non può rispondere al momento');
                }
            };
        });
        //Ritorno il valore della Promise
        return p;
    }
}

//Al caricamento della pagina invoco il metodo che inoltra la richiesta al server
window.onload = function (){
    $.get('url localhost').then((res) => {
        console.log(res)
    }).catch((errore) => {
        console.log(errore);
    });
}



/*************************** Utilizzo l'interfaccia FETCH di JavaScript ************************/

const serverURL = 'http://localhost:3000';
const postURL = 'posts/';

//Chiamata all'URL specificato
fetch(serverURL+postURL+"1").then((res) => {
    //Ci restituisce una Promise contenente la risposta del server (positiva o negativa)
    console.dir(res);

    //Se è vero
    if(res.ok){
        return res.json();
    }
    else{
        //Sto sollevando l'eccezione
        throw new Error('Risposta fallita')
    }
}).then((err) => {
    console.log(json);
}).catch((err) => {
    console.error(err);
});


/******************* Utilizzo l'interfaccia FETCH di JavaScript evoluta *******************/

//Effettuo la chiamata al server
fetch(serverURL+postURL+"1")
//Primo then: ritorna il body della risposta grazie a .json che ritorna una Promise
.then(response => response.json())
//json contiene tutti gli elementi, cioè tutto l'array
.json(json => console.log(json));



/******************************** FETCH JAVASCRIPT AL GIORNO D'OGGI ****************************/

//FETCH non è altro che un'interfaccia Promise.
//Al suo interno specifico come parametro l'URL su cui effettuare la richiesta HTTP
//La risposta del server viene gestita come una Promise:

// - Successo: la Promise è risolta
// 1. Entro nel primo ramo .then() che fornisce la risposta del server sotto forma di oggetto di tipo
//    Response (status, statusText, ok ecc): questa promise viene risolta ogni volta che c'è una
//    risposta da parte del server anche se non sempre affermativa (200 OK). In questo ramo non
//    dobbiamo dare per scontato di aver ottenuto il contenuto richiesto al server;

// - Fallimento: la Promise viene rigettata
// 1. Il server non risponde;
// 2. Oppure è scaduta la connessione ad Internet;


//ESEMPIO 1
//Effettuo una richiesta al server (URL)
fetch('http://example.com/movies.json')
//Primo .then: sta ritornando una Promise
  .then(response => response.json())
  //Secondo .then: dalla Promise sto prendendo il dato vero e proprio
  .then(data => console.log(data));


//ESEMPIO 2
//Esempio di richiesta modificata per gestire l'errore
fetch('http://localhost:3000/')
.then(response => {
     return console.log(response);
})
.catch(error => {
    return console.log('Si è verificato un errore...', error)
});


//**** Quando si utilizza la FETCH, essendo asincrona, è bene utilizzare la seguente sintassi: ****

//Funzione asincrona per via dell'await
async function getAlbum(){
    //Il client si pone in attesa che questa Promise venga risolta dal server
    let albums$ = await fetch(serverURL+pathAlbums)
    .then(res => res.json());
    //Appena ottengo la risposta del server inizio a ciclare albums$
    return albums$.map();
}
let album = getAlbum();
