//Oggetto Persona
let persona = {
    nome : 'Gianmarco',
    cognome : 'Polizzi'
}


//STORAGE
//Simula un database o una collection HashMap (chiave, valore)
//Usiamo il browser per vedere quello che facciamo con window



//Inserisco un elemento nello storage
function scriviStorage(testo){
    
    window.localStorage.setItem('utenti', JSON.stringify(persona));

}

scriviStorage('Ciao sono una stringa');

function leggiStorage(){
    
    let datoletto = JSON.parse(window.localStorage.getItem('utenti'));
    console.log(datoletto);
}