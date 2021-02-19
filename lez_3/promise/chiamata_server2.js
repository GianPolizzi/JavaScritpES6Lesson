//Passo un parametro generico di città per effettuare più chiamate al server:
// 1 - https://restcountries.eu/rest/v2/capital/london
// 2 - https://restcountries.eu/rest/v2/capital/paris
// 3 - https://restcountries.eu/rest/v2/capital/madrid

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


//Metodo per effettuare 3 chiamate in serie
function convertiJSON2(){
    //Chiamata 1
    caricaFile('london').then((res) => {
        const dati = JSON.parse(res);
        console.log(dati);

        //Chiamata 2 (se va bene la 1)
        return caricaFile('paris')
    }).then((res) => {
        const dati = JSON.parse(res);
        console.log(dati);

        //Chiamata 3 (se va bene la 2)
        return caricaFile('madrid')
    }).then((res) => {
        const dati = JSON.parse(res);
        console.log(dati);

        //Errore se non viene risolta almeno una promise
    }).catch((err) => {
        console.log(err);
    })
}


//Metodo per effettuare 3 chiamate raggruppate
function convertiJSON3(){
    Promise.all([
        caricaFile('london'),
        caricaFile('paris'),
        caricaFile('madrid')
    ])
    .then((dati) => {
        //const dati = JSON.parse(res);
        console.log(dati[0]);
        console.log(dati[1]);
        console.log(dati[2]);
    //Errore se non viene risolta almeno una promise
    }).catch((err) => {
        console.log(err);
    })
}


//Metodo per effettuare 3 chiamate ma solo la prima ad essere risolta viene utilizzata
function convertiJSONRace(){
    Promise.race([
        caricaFile('london'),
        caricaFile('paris'),
        caricaFile('madrid')
    ])
    .then((res) => {
        const dati = JSON.parse(res);
        console.log(dati);
    //Errore se non viene risolta neanche una promise
    }).catch((err) => {
        console.log(err);
    })
}