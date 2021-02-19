/* GENERATORI (ES6)
A differenza di una funzione normale che esegue il codice tutto per intero quando viene invocata,
una funzione Generatore può eseguire solo determinate porzioni di codice al suo interno.
Sono stati ideati per lavorare assieme alle Promise!
 */

function* gen1(){
    console.log('inizio');
    yield 3 + 5;

    console.log('in mezzo');
    yield 'parola2';

    console.log('fine');
    return 'fine al posto di undefined';
}

//Invoco la funzione Generatore
//Finchè ci sarà ancora codice da eseguire, il console.log() ritornerà 'false'
const ris1 = gen1();
//Eseguo fino al primo 'yield'
const r1 = ris1.next();
console.log(r1);
//Eseguo fino al secondo 'yield'
const r2 = ris1.next();
console.log(r2);
//Eseguo fino alla fine
const r3 = ris1.next();
console.log(r3);