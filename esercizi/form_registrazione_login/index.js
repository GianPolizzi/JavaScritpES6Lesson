//Database vuoto (utenti che si registrano)
var userDB = [];
//Chiave Local Storage
const LSkey = 'utenti_registrati';

//Funzione prototipo User
function User(mail,password){
    this.mail = mail;
    this.password = password;
}

//All'avvio, se il Local Storage non è vuoto, parsifica i dati e salvali nel DB
window.onload = () => {
    if(window.localStorage.getItem(LSkey) != null) {
        let datiStorage = JSON.parse(window.localStorage.getItem(LSkey));
        userDB = datiStorage;
    }
}

//Cerca la password di un utente all'interno del DB
function cercaAccount(i, pass){
    let trovato = false;
    if(userDB[i].password === pass){
        trovato = true;
    }
    return trovato;
}

//Login
async function login(){
    let loginMail = document.getElementById('loginMailInput').value;
    let loginPassword = document.getElementById('loginPasswordInput').value;

    //trim() restituisce una stringa, eliminando gli spazi vuoti
    if(loginMail.trim() == '' || loginPassword.trim() == ''){
        alert('Entrambi i campi sono abbligatori');
    }
    //Se compilo entrambi i campi
    else{
        let indexEmail = controllaSePresente(loginMail);
        //Se la mail non è stata trovata, posso registrarmi
        if(indexEmail !== false){
            let passTempCript = await encrypt(loginPassword);
            if(cercaAccount(indexEmail, passTempCript)){
                window.location.href = 'home.html';
            }
            else{
                alert('Password non corretta');
            }
        }
        else{
            alert('Devi ancora registrarti!');    
            event.preventDefault();
        }
    }
}

//Sign In
async function registrazione(){
    let email = document.getElementById('registerMailInput');
    let password = document.getElementById('registerPasswordInput');
    let passwordConfirm = document.getElementById('registerPasswordConfirm');

    let inputMail = email.value;
    let inputPassword = password.value;
    let inputPasswordConfirm = passwordConfirm.value;

    if(inputMail.trim() == '' || inputPassword.trim() == '' || inputPasswordConfirm.trim() == ''){
        alert('Tutti i campi sono obbligatori');
    }
    else{
        if(!validateEmail(inputMail)){
            alert('Indirizzo email non valido');
        }
        else{
            if(inputPasswordConfirm !== inputPassword){
                ('Le password inserite non coincidono');
            }
            else{
                if(controllaSePresente(inputMail !== false)){
                    alert('Indirizzo email già utilizzato');
                }
                else{
                    let passwordCriptata = await encrypt(inputPassword);
                    let u = new User(inputMail, passwordCriptata);
                    userDB.push(u);
                    window.localStorage.setItem(LSkey, JSON.stringify(userDB));
                    alert('Utente registrato con successo');

                    emptyInput(email);
                    emptyInput(password);
                    emptyInput(passwordConfirm);
                }
            }
        }
    }
}

//Controlla se è presente un utente tramite e-mail
function controllaSePresente(email){
    let trovato = false;
    userDB.forEach((user, i) => {
        if(user.mail === email){
            trovato = i;
            console.log(trovato);
            return;
        }
    });
    return trovato;
}

//Cripto la password appena registrata
async function encrypt(text) {
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
    return hashHex;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 }

function emptyInput(element){
    element.value = '';
}