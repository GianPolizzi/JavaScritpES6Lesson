//Restituisce una HTMLCollection che elenca tutti gli elementi del <form name="loginForm">
const form = document.forms['loginForm'];
//Aggiungo un evento al type = "submit" del bottone del form: (tipo, funzione)
form.addEventListener('submit', formSubmit);

function formSubmit(event){
    
    if(form.email.value == '' || form.email.value == undefined){
        alert('Email non valida!');
        //Blocchiamo il flusso naturale del form: il metodo preventDefault() dell'interfaccia Event dice all'user agent che se
        //l'evento non viene esplicitamente gestito, la sua azione predefinita non dovrebbe essere svolta normalmente.
        event.preventDefault();
    }
    else if(form.password.value == '' || form.password.value == undefined){
        alert('Password non valida!');
        event.preventDefault();
    }
    else{
        //Verificare che l'utente che sta effettuando il login è registrato nel Local Storage
        if(form.email.value === emailDB && sha512(form.password.value) === passwordDB){
            //Andiamo nella dashboard (Non ho bisogno di istruzioni per entrare in dashboard.html perchè
            //non ho al di fuori dei cicli if ed else dei preventDefault)

            //COOKIE (in azienda sarà poi un token)
            //Setto un cookie e come valore gli concateno la stringa
            document.cookie = "loggedUser="+sha512(form.password.value);
        }
        else{
            form.reset();
            alert('Credenziali inesistenti nel DB');
            event.preventDefault();
        }
    }
    console.log(form.email.value);
    console.log(form.password.value);
}
