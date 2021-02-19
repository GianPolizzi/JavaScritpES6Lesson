//Funzione esterna
function test(){
    let username = 'Gianmarco';
    console.log(username);

    //Funzione interna
    function internalFunc(){
        let internalVar = 2;
        console.log(internalVar);
    }
}
//Stamperà solo la funz esterna ma non quella interna
test();


//CLOSURE: servono quando si fanno le chiamate AJAX al server
function test2(){
    let username = 'Gianmarco';
    console.log(username);

    //Dichiaro una funzione interna ad una funzione
    function internalFunc2(){
        let internalVar2 = 2;
        console.log(internalVar2);
        console.log(username);
    }
    //Chiusura del mio metodo: Closure
    return internalFunc2();
}

//Stamperà tutta la funzione
let func2 = test2();
func2;

