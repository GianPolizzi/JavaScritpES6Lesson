//Voglio bloccare il generatore e far ritornare il parametro inserito
function* gen2(x){
    yield x;
    const numero = 5 + (yield (x + 1));
    yield numero;
}

//Richiamo la funzione (suspended)
const ris2 = gen2(10);
//Inizio a percorrere la funzione che si fermerà al primo 'yield'
console.log(ris2.next());
//Si fermerà al secondo 'yield'
console.log(ris2.next());
//Si fermerà al terzo 'yield' (il 50 verrà messo al posto di 11)
console.log(ris2.next(50));




//****************************** Esempio: Utilità del Generatore *************************
//Voglio creare degli id univoci
function* gen3(){
    let id = 0;
    while(true){
        yield id++;
    }
}

const ris3 = gen3();
console.log(ris3.next());
console.log(ris3.next());
console.log(ris3.next());
console.log(ris3.next());
console.log(ris3.next());
console.log(ris3.next());
console.log(ris3.next());
console.log(ris3.next());
