//Definisco 2 stringhe ed un number
var name = "Gianmarco";
var surname = "Polizzi";
var eta = 28;

//Concateno le 2 var
console.log(name + " " +surname);

//Rendo tutto il mio nome maiuscolo
console.log(name.toUpperCase() + " "+ surname);

//Definisco e concateno una o più stringhe
var stringa1 = 'Vado al supermerkato per comperare il latte';
stringa1 += ' e compro anche il caffe!'

//Stringa come valore iterabile
let stringa2 = 'Ciao mondo';
//Lunghezza della stringa
console.log(stringa2.length);
//Mi riferisco ad un preciso carattere della stringa: 'C'
console.log(stringa2[0]);


//Concatenazione di oggetti
const obj = {
    nome : 'Gianma',
    cognome : 'Polizzi',
    eta : 28
};


//TEMPLATE LITERAL: Metodo migliore per fare una concatenazione di oggetti
let persona = `Ciao sono ${obj.nome} ${obj.cognome} ed ho ${obj.eta} anni!`;
console.log(persona);

//Template literal: le stringhe template literal sono stringhe letterali
// - consentono espressioni incorporate ed aiutano per le grandi concatenazioni
// - sono racchiuse da 2 caratteri backtick (Alt + 9 su MAC): ``
`stringa testo`;
`stringa testo ${espressione} stringa testo ${espressione}`;