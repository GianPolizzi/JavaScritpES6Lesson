/*
let p = new Persona('marco', 'rossi');
p.patenti.push('B');


function Persona(n,c){
    this.nome = n;
    this.cognome = c;
    this.patenti = [];

    this.getPatenti = () => {
        return this.parenti;
    }
}
*/

//CLASSI (Introdotte con ES6)
class Persona{
    //Costruttore: dichiaro ed inizializzo gli attributi o proprietà della classe
    constructor(n,c){
        this.nome = n;
        this.cognome = c;
        this.patenti = [];
    }

    //Metodi della classe
    getNome(){
        return this.nome;
    }

    setPatente(pat){
        this.patenti.push(pat);
    }
}

//Creo un'istanza della classe
var p2 = new Persona('Mario', 'Bianchi');
p2.setPatente('B');
