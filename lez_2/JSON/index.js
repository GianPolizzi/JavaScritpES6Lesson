//JSON : JavaScript Object Notation
//Serve per immagazzinare o prelevare informazioni in un formato molto simili ad un oggetto JS

//Avvio la connessione per prelevare dal server
function scaricaFile(){

    //Oggetto build-in di JS per effettuare chiamate AJAX
    const xhttp = new XMLHttpRequest();

    //Apro la connessione con il server:
    // - Primo parametro: richiesta GET o POST
    // - Secondo parametro: nome documento da richiedere
    // - Terzo parametro: true (connessione asincrona) o false (connessione sincrona)
    xhttp.open('GET', 'esempio.json', true);

    //Invio le informazioni al server
    xhttp.send();

    //
    xhttp.onreadystatechange = function (){
        //readyState è una proprietà con valori che vanno da 0 a 4:
        // 0 --> Richiesta di connessione non ancora accettata
        // 1 --> Richiesta di connessione accetatta
        // 2 --> Il server ha ricevuto la mia richiesta
        // 3 --> Il server sta processando la mia richiesta
        // 4 --> Il server ha finito di processare la richiesta e mi sta ritornando la risposta

        //status è una proprietà notifica lo stato del server
        // 200 --> Il server ha trovato quello che stavo richiedendo e lo sta inviando
        // 404 --> Il server non ha trovato quella pagina
        if (this.readyState === 4 && this.status === 200){
            //Prelevo l'oggetto (stringa) json dal server convertendolo da .json a .js grazie a "parse"
            console.log(JSON.parse(this.responseText));

            //Prelevo il secondo JSON (quello più complicato)
            convertiJSON(this.responseText);
        }
    }
}

//scaricaFile();

//Invio al server
function caricaFile(){

    const oggettoJS = {
        prop1 : 'STRINGA',
        prop2 : 555
    };

    //Invio al server l'oggetto JS convertendolo in stringa JSON grazie a "stringify":
    //- Primo parametro : nome oggetto da convertire in stringa;
    //- Secondo parametro: falso per evitare di inserire funzioni particolari;
    //- Terzo parametro: numero di spazi di indentazione tra ogni elemento;
    console.log(JSON.stringify(oggettoJS, false, 4));
}

caricaFile();

//Creo una funzione per prelevare la stringa JSON dal server e convertirla in oggetto JS
function convertiJSON(dati){
    //Parsifico la stringa
    const data = JSON.parse(dati);

    document.getElementById('titolo').innerHTML = data.testo.titolo;
    document.getElementById('numeroUtenti').innerHTML = data.utenti.length;
    document.getElementById('nomeUtenti').innerHTML = data.utenti;
    document.getElementById('paragrafo').innerHTML = data.testo.paragrafo;
    document.getElementById('footer').innerHTML = data.testo.footer;
}
