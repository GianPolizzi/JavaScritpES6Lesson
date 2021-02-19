/* COOKIE
Piccoli frammenti di informazioni sottoforma di stringhe che si ancorano all'interno
del browser dell'utente mentre naviga all'interno di una pagina web.

Sono composti da 3 parti, ciascuna composta da una coppia chiave valore:
- informazione specifica;
- data di scadenza del cookie;
- percorso del file per cui questo cookie vale;

Esempio:
"colore = red; expires = Thu, 20 Dec 2020 00:00:00 UTC; path=/;"
 */


function caricaCookie(){
    //Con la proprietà dell'oggetto document.cookie, salvo tutti i cookies nel browser
    //di questa pagina web all'interno della variabile myCookie
    let myCookie = document.cookie;
    //Controllo se la parola "colore" è dentro i nostri cookies
    if(/colore/.test(myCookie)){
        //Se viene trovata, suddivido la stringa dei cookie in base ai ';' che vengono trovati
        let cookieColore = document.cookie.split(';');
        for(const elem of cookieColore){
            if(/colore/.test(elem)){
                cookieColore = document.cookie.split('=');
            }
        }
        //Coloro il background della pagina del colore preferito dall'utente,
        //quindi prendo l'elemento 1 dell'array, cioè il valore
        document.body.style.backgroundColor = cookieColore[1];
    }
    //Altrimenti, se non esiste il colore, vado a creare un nuovo cookie che contiene la
    //nuova preferenza dell'utente
    else{
        //Chiedo all'utente di inserire un nuovo colore in lingua inglese
        let colore = prompt('Insert your favourite color please:');
        //Creo una nuova data di scadenza del cookie
        let data = new Date();
        //Aggiungo 30 giorni alla data attuale per stabilire la scadenza del cookie
        data.setTime(data.getTime() + (1000 * 60 * 60 * 24 * 30));
        //Converto il formato data in formato stringa per poterlo salvare nel cookie
        let scadenza = 'expires = ' + data.toUTCString();
        document.cookie = `colore = ${colore}; ${scadenza}; path=/`;
        //Ricarico la pagina
        location.reload();
    }
}

function cancellaCookie(){
    document.cookie = 'colore = ; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    location.reload();
}