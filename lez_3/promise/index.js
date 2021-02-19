//PROMISE
//Oggetto build-in che viene utilizzato per lavorare con operazioni asincrone.
//Le funz. che compiono lavoro asincrono non ritornano il valore di completamento, ma una Promise.
//Buona alternativa per evitare di uilizzare troppe callback.
//Può restituire 3 stati:
// 1 - Pending: aspetto una risposta dal server;
// 2 - Fulfilled: risposta del server positiva;
// 3 - Rejected: richiesta rigettata per un'errore del server;

//L'oggetto Promise ha 2 argomenti, a loro volta funzioni (callback):
// - resolve: indica che la promise è risolta;
// - reject: indica che la promise è rifiutata;



//*************** Definisco un'istanza dell'oggetto Promise (Function classica) *****************
let prom1 = new Promise(function(resolve, reject){
    if(true){
        resolve("Promise risolta: il server ha risposto correttamente!");
    }
    else{
        reject("Promise rifiutata: il server ha dato errore!");
    }
});

//Se la promise è risolta posso utilizzare il dati (res)
prom1.then((res) => {
    console.log(res);
});

//Se la promise viene rifiutata catturo l'errore (err)
prom1.catch((err) => {
    console.log(err);
});




// ********************** Definisco un oggetto Promise (Arrow function) ************************
let prom2 = new Promise((resolve, reject) => {
    resolve('Promise risolta');
    reject('Promise rifiutata');
});

//Se la promise viene risolta, posso andare a manipolare i dati (res)
prom2.then((res) => {
    console.log(res);
    //Altrimenti catturo l'errore
}).catch((err) => {
    console.log('Errore: ', err);
})