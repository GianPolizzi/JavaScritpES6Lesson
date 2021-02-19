var anagrafica = [];

class Cliente {
    constructor(id,n,e){
        this.id = id;
        this.name = n;
        this.email = e;
    }

    verificaEmail(email){
        if(this.email === email){
            return true;
        }
        else{
            return false;
        }
    }
}

//Elimina cliente dalla tabella
function eliminaCliente(email){
    let r = confirm('Sei sicuro di vole eliminare il cliente con la mail '+email+'?');
    let posCliente = -1;
    if(r){
        //Index rappresenta la i del ciclo for
        anagrafica.forEach((cliente, index) => {
            if(cliente.email === email){
                posCliente = index;
            }
        });
        if(posCliente!=-1){
            //Elimino il cliente dall'anagrafica
            anagrafica.splice(posCliente,1);
            //Conserviamo la nuova anagrafica nello storage
            window.localStorage.setItem('clienti', JSON.stringify(anagrafica));
            caricaTabellaClienti();
        }
    }
}

//Pongo il client in attesa della Promise del Server
async function getClienti(){
    let clienti$ = await fetch(serverURL+pathUsers).then(response => response.json());
    return clienti$;
}

//Funzione che aggiorna la tabella clienti consultando il Local storage
function caricaTabellaClienti(){
    
    //Scarico i clienti dal local storage e li deposito nella variabile clientiDB
    let clientiDB = JSON.parse(window.localStorage.getItem('clienti'));

    let tr_tag = '';

        clientiDB.forEach(cliente => {
            tr_tag += `
            <tr>
            <td>${cliente.name}</td>
            <td>${cliente.email}</td>
            <td><button class="btn btn-sm btn-danger" id="${cliente.id}" onclick="eliminaCliente('${cliente.email}')"><i class="fa fa-trash-o" aria-hidden="true"></i> Elimina</button></td>
            </tr>`
        });
        //Se faccio una stringa uso innnerHTML invece se creo un nodo uso appendchild
        document.getElementById('clienti').innerHTML = tr_tag;
}


function verificaEmailDB(email){
    let clientiDB = JSON.parse(window.localStorage.getItem('clienti'));
    let match = false;
    clientiDB.forEach((cliente) => {
        if(cliente.email === email){
            match = true;
        }
    });
    return match;

}

//Gestisce gli errori di validazione nel form
function gestisciErrori(name){
    console.log(document.getElementsByClassName('inputFormCliente'));
    for(let i=0; i<document.getElementsByClassName('inputFormCliente').length; i++){
        if(document.getElementsByClassName('inputFormCliente')[i].classList.contains('error')){
            document.getElementsByClassName('inputFormCliente')[i].classList.remove('error');
        }
    }
    document.getElementById(name).classList.add('error');
}

function inserisciNuovoCliente(){
    //Collegare le variabili JS all'HTML: Preleva i dati dall'input
    let nomeInput = document.getElementById('nomeC').value;
    let cognomeInput = document.getElementById('cognomeC').value;
    let emailInput = document.getElementById('emailC').value;

    //Se si lascia uno o più campi vuoti
    if(nomeInput === '' || nomeInput === undefined){
        gestisciErrori(nomeInput);
    }
    else if(cognomeInput === '' || cognomeInput === undefined){
        gestisciErrori(cognomeInput);
    }
    else if(emailInput === '' || emailInput === undefined){
        gestisciErrori(emailInput);
    }

    //Altrimenti, se i campi vengono riempiti tutti
    else{
        //Validazione lato server
        if(!verificaEmailDB(emailInput)){
            //Inserisco il nuovo utente
            console.log(anagrafica);
            let c = new Cliente((anagrafica.length + 1), nomeInput +" "+ cognomeInput, emailInput);
            anagrafica.push(c);
            window.localStorage.setItem('clienti', JSON.stringify(anagrafica));
            alert('Utente inserito con successo');
            location.href = 'clienti.html'
        }
        else{
            alert('Utente gia esistente in anagrafica');
        }
    }
}

/* FUNZIONE DI REGISTRAZIONE NUOVO CLIENTI CON <FORM>
function nuovoCliente(){
    //Prendo tutti i valori del form e li deposito dentro una variabile
    let nome = form.nomeC.value;
    let cognome = form.cognomeC.value;
    let email = form.emailC.value;

    if(email === '' || email === undefined){
        gestisciErrori("emailC");
        //event.preventDefault();
    }
    else if(cognome === '' || cognome === undefined){
        gestisciErrori("cognomeC");
        //event.preventDefault();
    }
    else if(nome === '' || nome === undefined){
        gestisciErrori("nomeC");
        //event.preventDefault();
    }
    else{
        //Validazione lato server
        if(!verificaEmailDB(email)){
            //Inserisco il nuovo utente
            console.log(anagrafica);
            let c = new Cliente((anagrafica.length+1), nome +" "+ cognome, email);
            anagrafica.push(c);
            window.localStorage.setItem('clienti', JSON.stringify(anagrafica));
        }
        else{
            alert('Utente gia esistente in anagrafica');
            //event.preventDefault();
        }
    }
}
*/

//Appena si atterra sulla pagina web...
window.onload = function(){
    //Verifico se l'admin esiste dal file auth.js
    if(verificaUtente()){
        //A partire dalla class="loader" della GIF aggiungo "hidden" per nascondere l'animazione
        document.getElementsByClassName('loader')[0].classList.add("hidden");
        //Se il local storage è vuoto lo riempio con i clienti
        if(window.localStorage.getItem('clienti') == null){
            //Invoco la funzione getClienti asincrona che contiene il primo then
            getClienti().then((usr) => {
                //Inserisco nel Local storage i clienti tramite setItem(chiave, funzione)
                window.localStorage.setItem('clienti',JSON.stringify(usr));
                //Riempio l'array anagrafica con i clienti
                anagrafica = usr;
                caricaTabellaClienti();
            });  
        }
        //Se invece c'è almeno un elemento, parsifico la stringa e la deposito in anagrafica (array)
        else{
            anagrafica = JSON.parse(window.localStorage.getItem('clienti'));
            caricaTabellaClienti();
        }
    }
    //Se non esiste l'admin ritorna alla login
    else{
        location.href = 'index.html';
    } 
}