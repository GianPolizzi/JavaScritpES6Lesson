//URL principale
const URL_PRINC = 'http://restcountries.eu/rest/v2/capital/';

function richiestaDati(city){
    city = document.getElementById('city').value;
    let info_city$ = fetch(`${URL_PRINC}${city}/`).then(res => res.json());
    return info_city$;
}

async function ottieniDati(city){
    let date = await richiestaDati(city);
    console.log('Dati richiesti: ', date);
    
    let capitale = date[0].capital;
    let nazione = date[0].name;
    let lingua = date[0].languages[0].nativeName;
    let numAbitanti = date[0].population;

    //Creo un nodo a partire da un id esistente ed innesto il mio codice
    let specchietto_info = document.getElementById('tabella');
    specchietto_info.innerHTML = `
    <h3>Capitale: ${capitale}</h3>
    <h3>Nazione: ${nazione}</h3>
    <h3>Lingua ufficiale: ${lingua}</h3>
    <h3>Numero abitanti: ${numAbitanti}</h3>
    `
}