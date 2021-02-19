//Prototipo di una funzione (lettera maiuscola) = Costruttore di Java
function Animale(n, r){
    this.nome = n || 'undefined';
    this.razza = r;
    this.habitat = 'terra';
}

//Creo l'oggetto cane
let cane = new Animale('pippo','labrador');

//Creo l'oggetto gatto
let gatto = new Animale('tom', 'persiano');

//Aggiungo temporaneamente e solo per il cane un nuovo attributo legs
cane.legs = 4;

console.log(cane.nome);
console.log(cane.razza);
console.log(cane.legs);


//Aggiungo definitevamente alla classe Animale un attributo legs (Varrà per tutti gli oggetti Animale)
Animale.prototype.legs = 4;


//Voglio collezionare gli animali in uno store
let Animalstore = [];

Animalstore.push(cane);
Animalstore.push(gatto);
console.log(Animalstore[0].nome);




/*****************************************************************************************************************************
//Definisco un'oggetto in JS (istanza di una classe)

let cane = {
    nome : 'pippo',
    tipo : 'animale',
    razza : 'pastore tedesco',
    habitat : 'terra',
    vaccini : []
}

let gatto = {
    nome : 'tom',
    tipo : 'animale',
    razza : 'persiano',
    habitat : 'terra',
    vaccini : []

}

const auto = {
    marca,
    modello,
    colore,
    cambio
}
*/