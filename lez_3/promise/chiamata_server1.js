//Effettuo una chiamata API ad un server
//Mi reco in un sito di cryptocurrency con API pubbliche
//Indirizzo: http://restcountries.eu/
//JSON API: https://restcountries.eu/rest/v2/capital/london
//(Il nome della città può essere cambiato a proprio piacere)


function caricaFile(){
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://restcountries.eu/rest/v2/capital/london/', true);
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

function convertiJSON(dati){
    caricaFile().then((res) => {
        const dati = JSON.parse(res);
        console.log(dati);
    }).catch((err) => {
        console.log(err);
    })
}