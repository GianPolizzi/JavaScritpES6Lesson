//CLASSE VEICOLO (PADRE)

class Veicolo {
    constructor(ruote, motore){
        this.ruote = ruote;
        this.motore = motore;
    }

    descrizioneVeicolo(){
        return `Questo veicolo ha ${this.ruote} ruote ${this.motore ? 'con motore' : 'a pedali'}`;
    }
}

const veicolo1 = new Veicolo(4, false);
console.log(veicolo1.descrizioneVeicolo());


//CLASSE AUTO (FIGLIO)

class Auto extends Veicolo {
    constructor(ruote, motore, marca, colore){
        //Con super richiamo i parametri della classe padre
        super(ruote, motore);
        //Con this inizializzo i nuovi parametri
        this.marca = marca;
        this.colore = colore;
    }

    descrizioneAuto(){
        return `${super.descrizioneVeicolo()} ed in particolare è un auto ${this.marca} di colore 
        ${this.colore}`;
    }
}

const auto1 = new Auto(4, true, 'Audi', 'bianco');
console.log(auto1.descrizioneAuto());
