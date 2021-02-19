//FUNZIONI ASINCRONE

function caricaFile(city){
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', `https://restcountries.eu/rest/v2/capital/${city}/`, true);
        xhttp.send();
        xhttp.onreadystatechange = function (){
            if (this.readyState === 4 && this.status === 200){
                //console.log(JSON.parse(this.responseText));
                //Risolvo la Promise
                resolve(this.responseText);
            }
            //Altrimenti se non si trova l'elemento ricercato nel server:
            else if(this.status === 404){
                reject(new Error(this.responseText));
            }
        }
        //Per tutti gli altri errori di connessione invece:
        xhttp.onerror = function(){
            reject(new Error(this.responseText));
        }
    })
}


//Metodo per effettuare 3 chiamate asincrone in serie
async function convertiJSON2(){
    try{
        //Chiamata 1
        //Dico a JS di aspettare che questa ritorna una Promise o un errore
        const londra = await caricaFile('london');
        let dati = JSON.parse(londra);
        console.log(dati);

        //Chiamata 2 (se va bene la 1)
        //Dico a JS di aspettare che questa ritorna una Promise o un errore
        const parigi = await caricaFile('paris');
        dati = JSON.parse(parigi);
        console.log(dati);

        //Chiamata 3 (se va bene la 2)
        //Dico a JS di aspettare che questa ritorna una Promise o un errore
        const madrid = await caricaFile('madrid');
        dati = JSON.parse(madrid);
        console.log(dati);
    }catch(err){
        console.log('Errore: ', err);
    }  
}


//Metodo per effettuare 3 chiamate asincrone raggruppate
async function convertiJSON3(){
    try {
        //JS aspetta fino a che non avrà tutte e 3 le risposte
        const tutte = await Promise.all([
            caricaFile('london'),
            caricaFile('paris'),
            caricaFile('madrid')
        ]);
        //const dati = JSON.parse(res);
        console.log(tutte[0]);
        console.log(tutte[1]);
        console.log(tutte[2]);
    } catch (err) {
        console.log('Errore: ', err);
    }
}


//Metodo per effettuare 3 chiamate asyncrone ma solo la prima ad essere risolta viene utilizzata
async function convertiJSONRace(){
    try {
        const primaAdArrivare = await Promise.race([
            caricaFile('london'),
            caricaFile('paris'),
            caricaFile('madrid')
        ]);
            const dati = JSON.parse(primaAdArrivare);
            console.log(dati);
    } catch (err) {
        console.log('Errore: ', err);
    }
}