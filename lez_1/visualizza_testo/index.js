//Creo una funzione che:
//1- Cerca tra i file html del progetto l'elemento con id="display";
//2- Innesta e sovrascrive all'interno dell'HTML la stringa 'Hello World'

function scriviStatico(){
    document.getElementById('display').innerHTML = 'Hello World';
}

//Crea una funzione che genera un alert (interrompe temporaneamnte l'esecuzione del codice)
function allerta(){
    alert('Hai appena cliccato sul tasto "Allerta"');
}

//Creo una funzione che genera una domanda (interrompe temporaneamente l'esecuzione del codice)
function domanda(){
    confirm("Sei sicuro di volerlo fare?");
}

//Utilizzo un popup per scrivere dall tastiera
function scriviDinamico(){
    //prompt() accetta numeri salvandoli nella variabile num come stringhe quindi devo convertire
    let num = prompt('Inserisci numero: ');
    console.log(parseInt(num));
}

//Sto scrivendo nella console
function consoleLog(){
    console.log('Hai appena cliccato sul tasto che attiva il console log');
}