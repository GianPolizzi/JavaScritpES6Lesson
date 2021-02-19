//Creare una data
document.getElementById('data').innerHTML = Date();


//CREARE UN OGGETTO DATA ED ESTRARRE I VALORI
let data = new Date();

//Giorno
data.getDate();

//Giorno della settimana (Dom = 0, Lun = 1, ecc)
data.getDay();

//Mese (Gennaio = 0, Febbraio = 1, ecc)
data.getMonth();

//Anno
data.getFullYear();

//Ora
data.getHours();

//Minuti
data.getMinutes();


//CREARE UN OGGETTO DATA E SETTARE I VALORI
let dataPersonale = new Date();

//Giorno
dataPersonale.setDate(4);

//Anno
dataPersonale.setFullYear(2000);
//oppure Anno, mese, giorno
dataPersonale.setFullYear(2000, 11, 15);


//TIMESTAMP: Parte dall'1 Gennaio 1970 fino alla data attuale
//Creo una nuova data passando i millisecondi che sono passati dal primo istante
let nuovaData = new Date(1234567890);

//Restituisce i millisecondi che sono passati dal 1 Gennaio 1970 fino ad oggi
let questo_momento = new Date.now();


//ESEMPI PER CREARE DATE
//Stringa
let dataConStringa = new Date('2 settembre 1991 14:02:45');
console.log(dataConStringa);

//Numeri
let dataConNumero = new Date(1991, 8, 2, 14, 2, 45);
console.log(dataConNumero);

//OPERAZIONI CON LE DATE
//Creo data attuale
let dataAttuale = new Date.now();
//Creo variabile che conta i millisecondi per 3 giorni in futuro:
//millisec * secondi in un minuto * minuti in un ora * ore del giorno * numero di giorni;
let tra3Giorni = 1000 * 60 * 60 * 24 * 3;
let totaleData = dataAttuale + tra3Giorni;