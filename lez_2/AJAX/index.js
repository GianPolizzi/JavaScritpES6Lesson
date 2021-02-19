//AJAX : Asynchrounous Javascript And XML
//Permette di scambiare informazioni tra la web page ed il server senza dover ricaricare la pagina

function caricaFile(){

    //Oggetto build-in di JS per effettuare chiamate AJAX
    const xhttp = new XMLHttpRequest();

    //Apro la connessione con il server:
    // - Primo parametro: richiesta GET o POST
    // - Secondo parametro: nome documento da richiedere
    // - Terzo parametro: true (connessione asincrona) o false (connessione sincrona)
    xhttp.open('GET', 'testo.txt', true);

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
            //Innesto la risposta del server nel HTML
            document.getElementById('display').innerHTML = this.responseText;
        }
    }
}