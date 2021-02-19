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
