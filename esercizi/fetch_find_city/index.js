//URL principale
const URL_PRINC = 'http://restcountries.eu/rest/v2/capital/';

function richiediAlServer(citta){
    return fetch(`${URL_PRINC}${citta}/`);
}

async function ottieniDati(citta){
    citta = document.getElementById('city').value;
    //Questa ritorna la promise con la risposta del server
    let res = await richiediAlServer(citta);
    console.log(res);
    //Questa ritorna le informazioni sulla città
    let info_city = await res.json();
    console.log(info_city);
    mappingDati(info_city);
}

function mappingDati(info){
    //Salvo i dati nelle variabili
    let capitale = info[0].capital;
    let nazione = info[0].name;
    let lingua = info[0].languages[0].nativeName;
    let numAbitanti = info[0].population;

    console.log(capitale);
    console.log(nazione);
    console.log(lingua);

    //Creo un nodo a partire da un id esistente ed innesto il mio codice
    let specchietto_info = document.getElementById('tabella');
    specchietto_info.innerHTML = `
    <h3>Capitale: ${capitale}</h3>
    <h3>Nazione: ${nazione}</h3>
    <h3>Lingua ufficiale: ${lingua}</h3>
    <h3>Numero abitanti: ${numAbitanti}</h3>
    `



}

