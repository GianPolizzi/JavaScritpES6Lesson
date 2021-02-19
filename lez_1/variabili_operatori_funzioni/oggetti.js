/***************************************** OGGETTI ***********************************************/

//Creare un oggetto in modo LETTERALE: Caso semplice
//Creo un oggetto e lo riempio dall'esterno con le proprietà
const oggetto = {}
oggetto.x = 10;
oggetto.y = 3;

//Creo un oggetto in modo LETTERLAE: proprietà e metodi definiti all'interno
let persona = {
    //proprietà
    nome: 'Gianmarco',
    cognome: 'Polizzi',
    eta: 28,

    //metodi
    presentarsi: function(){
        let saluto = `Ciao mi chiamo ${this.nome} ${this.cognome} ed ho ${this.eta} anni.`;
        document.getElementById('presentami').innerHTML = saluto;
    }
};

//Invoco il metodo sull'oggetto per accedere alle proprietà o metodi
persona.presentarsi();

//Per cancellare la proprietà eta dell'oggetto
delete persona.eta;


//Creare un oggetto con COSTRUTTORE E PROTOTIPI
//Utile se so che dovrò utilizzare un oggetto molte volte

//COSTRUTTORE: si capisce che è una funzione costruttore per via della lettera maiuscola
function Auto(marca, colore){
    this.marca = marca;
    this.colore = colore;
    this.descrizione = function(){
        console.log('Marca: '+this.marca+', colore: '+this.colore);
    }
}
//Creo un'istanza per utilizzarla
const leMans = new Auto('Audi', 'bianco');
leMans.descrizione();

//Creo un'istanza per utilizzarla
const corsa = new Auto('Opel', 'nero');
corsa.descrizione();

//Se voglio aggiungere una nuova proprietà uso il PROTOTYPE
//Tutti gli oggetti che discendono da quel costruttore avranno questa proprietà
Auto.prototype.velocitaMax = 100;

