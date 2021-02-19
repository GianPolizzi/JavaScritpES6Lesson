/* FETCH API
Metodo più usato per ottenere risorse dalla rete
In precedenza si erano visti strumenti simili ma più datati:
1 - Chiamata AJAX;
2 - Promise che manipola ed avvolge al suo interno la chiamata AJAX;

La fetch API ritorna sempre una Promise
Al suo interno, scrivo l'URL usato per la chiamata:
http://restcountries.eu/
https://restcountries.eu/rest/v2/capital/paris
https://restcountries.eu/rest/v2/capital/london
https://restcountries.eu/rest/v2/capital/madrid
*/


const URL_PRINC = 'http://restcountries.eu/';
const URL_CAPITAL = 'rest/v2/capital/';

//Funzione che raggiunge l'URL specificato dentro la fetch e ritorna una Promise
function caricaFile(city){
    return fetch(`${URL_PRINC}${URL_CAPITAL}${city}/`);
}

async function convertiJSON(){
    const parigi = await caricaFile('paris');
    //Ritorna la Promise: oggetto con varie proprietà ma senza i dati
    console.log(parigi);
    //Per estrarre i dati utilizzo .json()
    let dati = await parigi.json();
    console.log(dati);

    const londra = await caricaFile('london');
    console.log(londra);
    dati = await londra.json();
    console.log(dati);

    const madrid = await caricaFile('madrid');
    console.log(madrid);
    dati = await madrid.json();
    console.log(dati);

}

convertiJSON();