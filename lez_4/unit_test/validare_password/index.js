//PASSWORD
// - Almeno 8 caratteri;
// - Almeno una lettera Maiuscola;
// - Almeno una lettera minuscola;
// - Almeno un numero;

function validarePassword(password){
    let valida = true;

    if(password.length < 8){
        valida = false;
    }
    else if(!/[A-Z]/.test(password)){
        valida = false;
    }
    else if(!/[a-z]/.test(password)){
        valida = false;
    }
    else if(!/[0-9]/.test(password)){
        valida = false;
    }
    return valida;
}

//Metodo rudimentale per provare la funzione: assert
//Da errore se la funzione invocata non restituisce un valore booleano = true
console.assert(validarePassword('RobDaMatti0'));


//Metodi Developer-Friendly: librerie online che bisogna integrare nel proprio codice
// 1. QUnit;
// 2. Jasmine;
// 3. Mocha;