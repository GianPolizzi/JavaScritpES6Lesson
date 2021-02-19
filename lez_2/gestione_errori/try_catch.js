/*
try{
    //Codice da eseguire
}catch(errore){
    //Tipo di errore
}
*/

//Gestione errore try-catch
try{
    console.log(x);
}
catch(erroreDef){
    console.log('Errore', erroreDef);
}

console.log('Ciao');

//Gestione errore try-catch personalizzato
try{
    let num = prompt('Inserire numero');

    if(!isNaN(num)){
        console.log('Hai inserito il numero: '+num);
    }
    else{
        //JS capisce che c'è un errore grazie a throw
        throw 'Errore! Non hai inserito un numero!';
    }
}
catch(customErr){
    console.log('Attenzione all\' errore', customErr);
}