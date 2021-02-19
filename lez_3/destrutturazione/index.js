let booleano = true;

const oggetto = {
    stringa: 'bla bla',
    numero: 4,
    booleano: booleano
    //A partire dalla ES6 può essere scritto anche come:
    //booleano
};

//Destrutturazione per oggetto: scompattare le sue props (chiave: valore)
const {stringa: parola, numero: num, booleano: bool} = oggetto;
console.log(parola);
console.log(num);
console.log(bool);


//Destrutturazione per array:
const arrayNumerico = [1, 2, 3, 4, 5];
const [primo, secondo, ...altri] = arrayNumerico;
console.log(primo);
console.log(secondo);
console.log(altri);
