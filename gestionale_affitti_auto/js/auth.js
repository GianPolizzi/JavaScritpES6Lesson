//FILE PER I CONTROLLI GENERICI DI AUTENTICAZIONE

//Percorsi web che utilizzo
const serverURL = 'http://localhost:3000/';
const pathUsers = 'users/';

//Definisco una costante (stringa) che permette di leggere e scrivere il cookie associato ad un utente
const cookieUser = document.cookie;

//Definisco una costante dove deposito il cookie, iniziando a considerare la stringa a partire dall'elemento 11
const cookieValue = cookieUser.substring(11);

//Mi ricavo l'oggetto adminUser del local storage
const adminUsr = JSON.parse(window.localStorage.getItem('adminUser'));

//A me interessano la password e l'email dell'oggetto adminUser
const passwordDB = adminUsr['password'];
const emailDB = adminUsr['email'];

//API CAR
const BRANDURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';
const MODELURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/';

//Di solito questa funzione la fa il Backend
function verificaUtente(){
    if(cookieUser!=''){
        if(cookieValue != passwordDB){
            return false;
        }
        else{
            return true;
        } 
    }
    else{
        return false;
    }
}

//Funzione per effettuare il logout
function logout(){
    document.cookie = 'loggedUser=';
    location.href = 'index.html';
}