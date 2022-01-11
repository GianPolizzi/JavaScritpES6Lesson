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
