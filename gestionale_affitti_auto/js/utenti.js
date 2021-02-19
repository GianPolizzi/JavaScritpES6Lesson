//Questo file contiene al lista degli utenti amministratori (in questo caso è solo uno)

class Utente{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
}
//Creo l'oggetto admin e passo al costruttore il nome utente e la password, criptandola con la codifica sha512
let adminUser = new Utente('mail@mail.it', sha512('ciao'));
//Deposito questo oggetto all'interno del local storage
window.localStorage.setItem('adminUser', JSON.stringify(adminUser));