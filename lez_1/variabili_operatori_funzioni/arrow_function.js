//ARROW FUNCTION: funzioni anonime con sintassi molto concisa
var somma = function(x, y){
    return x + y;
};
//Possiamo implementare la precedente, utilizzando le arrow function
var somma = (x, y) => (x + y);

//La sintassi generale delle Arrow Function prevede:
// - le parentesi tonde intorno alla lista dei parametri;
// - parentesi graffe per delimitare il corpo della funzione;
// - se la funzione non prevede nessun parametro è obbligatorio inserire le parentesi tonde;
var somma = (x, y) => {
    return x + y;
}

//Data la sintassi compatta, esse di prestano molto bene ad essere usate come callback
//Questa...
var numeri = [12, 54, 981];
numeri.forEach(function(valore){
    console.log(valore);
});

//...diventa:
var numeri = [12, 54, 981];
numeri.forEach((valore) => {
    console.log(valore);
});

//ATTENZIONE: La parola chiave this all'interno di una arrow function non rappresenta il contesto di esecuzione a runtime come
// invece avviene per le funzioni standard. Essa rappresenta sempre lo scope in cui la funzione stessa viene definita

var obj = {
    nome : 'Andrea',
    cognome : 'Rossi',
    saluta : function(){
        //Questa funzione ha un altro scope rispetto a quello della funz che la contiene ma,
        //grazie all'arrowfunction posso accedere alla variabile contenuta nell'altro scope contenuto
        setTimeout(() => {
            console.log('Ciao'+this.nome);
        }, 2000);
        console.log(nome+" "+cognome);
    }
}
//Restituira NaN e non Ciao
obj.saluta();