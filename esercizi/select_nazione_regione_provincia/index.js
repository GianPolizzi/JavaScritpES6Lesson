//Array Nazioni
const Nazioni = ['Italia', 'Francia', 'Spagna'];

//Oggetto Regioni
const Regioni = {
    italia : ['Sicilia', 'Sardegna', 'Calabria', 'Puglia', 'Lazio', 'Lombardia'],
    francia : ['Grande Est', 'Normandia', 'Nuova Acquitania'],
    spagna : [ 'Andalusia', 'Aragona', 'Catalogna']
}

//Oggetto Province
const Province = {
    sicilia : ['Palermo', 'Catania', 'Messina', 'Trapani'],
    sardegna : ['Cagliari', 'Nuoro', 'Oristano', 'Sassari'],
    lombardia : ['Milano', 'Varese', 'Como']
}

function riempiSelectNazione(){
    let default_option = document.getElementById('select-nazione');
    //Evito di creare nodi duplicati
    if(default_option.lastChild.textContent != 'Spagna'){
        //Ciclo l'array Nazioni
        Nazioni.forEach((nazione, i) => {
            console.log('Nazione ['+i+']: ', nazione);
            //Creo un nuovo nodo e lo appendo ad 'default-option'
            let nodo_option = document.createElement('option');
            default_option.appendChild(nodo_option);
            //Aggiungo un attributo al nuovo nodo
            nodo_option.setAttribute('id', nazione);
            //Inserisco il testo all'interno del nuovo nodo
            let testo_option = document.createTextNode(`${nazione}`);
            nodo_option.appendChild(testo_option);
            default_option.appendChild(nodo_option);
        });
    }
}

//Scegli nazione e stampa le regioni di quella nazione
function scegliNazione(){
    let ita = document.getElementById(Nazioni[0]).selected;
    let fra = document.getElementById(Nazioni[1]).selected;
    let esp = document.getElementById(Nazioni[2]).selected;
    console.log(ita, fra, esp);

    if(ita == true){
        console.log('Italia',ita);
        
        let default_option = document.getElementById('select-regione');
        //Evito di creare nodi duplicati
        if(default_option.lastChild.textContent != 'Lombardia'){
            //Ciclo l'array Nazioni
            Regioni.italia.forEach((regione, i) => {
                console.log('Regione ['+i+']: ', regione);
                //Creo un nuovo nodo e lo appendo ad 'default-option'
                let nodo_option = document.createElement('option');
                default_option.appendChild(nodo_option);
                //Aggiungo un attributo al nuovo nodo
                nodo_option.setAttribute('id', regione);
                //Inserisco il testo all'interno del nuovo nodo
                let testo_option = document.createTextNode(`${regione}`);
                nodo_option.appendChild(testo_option);
                default_option.appendChild(nodo_option);
            });
        }
    }
    else if(fra == true){
        console.log('Francia',fra);

        let default_option = document.getElementById('select-regione');
        //Evito di creare nodi duplicati
        if(default_option.lastChild.textContent != 'Nuova Acquitania'){
            //Ciclo l'array Nazioni
            Regioni.francia.forEach((regione, i) => {
                console.log('Regione ['+i+']: ', regione);
                //Creo un nuovo nodo e lo appendo ad 'default-option'
                let nodo_option = document.createElement('option');
                default_option.appendChild(nodo_option);
                //Aggiungo un attributo al nuovo nodo
                nodo_option.setAttribute('id', regione);
                //Inserisco il testo all'interno del nuovo nodo
                let testo_option = document.createTextNode(`${regione}`);
                nodo_option.appendChild(testo_option);
                default_option.appendChild(nodo_option);
            });
        }

    }
    else{
        console.log('Spagna',esp);

        let default_option = document.getElementById('select-regione');
        //Evito di creare nodi duplicati
        if(default_option.lastChild.textContent != 'Catalogna'){
            //Ciclo l'array Nazioni
            Regioni.spagna.forEach((regione, i) => {
                console.log('Regione ['+i+']: ', regione);
                //Creo un nuovo nodo e lo appendo ad 'default-option'
                let nodo_option = document.createElement('option');
                default_option.appendChild(nodo_option);
                //Aggiungo un attributo al nuovo nodo
                nodo_option.setAttribute('id', regione);
                //Inserisco il testo all'interno del nuovo nodo
                let testo_option = document.createTextNode(`${regione}`);
                nodo_option.appendChild(testo_option);
                default_option.appendChild(nodo_option);
            });
        }
    }

}


function scegliRegione(){
    let sic = document.getElementById('Sicilia').selected;
    let sar = document.getElementById('Sardegna').selected;
    let lom = document.getElementById('Lombardia').selected;
    console.log(sic, sar, lom);

    if(sic == true){
        console.log('Sicilia',sic);
        
        let default_option = document.getElementById('select-citta');
        //Evito di creare nodi duplicati
        if(default_option.lastChild.textContent != 'Trapani'){
            //Ciclo l'array Nazioni
            Province.sicilia.forEach((provincia, i) => {
                console.log('Regione ['+i+']: ', provincia);
                //Creo un nuovo nodo e lo appendo ad 'default-option'
                let nodo_option = document.createElement('option');
                default_option.appendChild(nodo_option);
                //Aggiungo un attributo al nuovo nodo
                nodo_option.setAttribute('id', provincia);
                //Inserisco il testo all'interno del nuovo nodo
                let testo_option = document.createTextNode(`${provincia}`);
                nodo_option.appendChild(testo_option);
                default_option.appendChild(nodo_option);
            });
        }
    }
    else if(sar == true){
        console.log('Sardegna',sar);

        let default_option = document.getElementById('select-citta');
        //Evito di creare nodi duplicati
        if(default_option.lastChild.textContent != 'Sassari'){
            //Ciclo l'array Nazioni
            Province.sardegna.forEach((provincia, i) => {
                console.log('Provincia ['+i+']: ', provincia);
                //Creo un nuovo nodo e lo appendo ad 'default-option'
                let nodo_option = document.createElement('option');
                default_option.appendChild(nodo_option);
                //Aggiungo un attributo al nuovo nodo
                nodo_option.setAttribute('id', provincia);
                //Inserisco il testo all'interno del nuovo nodo
                let testo_option = document.createTextNode(`${provincia}`);
                nodo_option.appendChild(testo_option);
                default_option.appendChild(nodo_option);
            });
        }

    }
    else{
        console.log('Lombardia',lom);

        let default_option = document.getElementById('select-citta');
        //Evito di creare nodi duplicati
        if(default_option.lastChild.textContent != 'Como'){
            //Ciclo l'array Nazioni
            Province.lombardia.forEach((provincia, i) => {
                console.log('Provincia ['+i+']: ', provincia);
                //Creo un nuovo nodo e lo appendo ad 'default-option'
                let nodo_option = document.createElement('option');
                default_option.appendChild(nodo_option);
                //Aggiungo un attributo al nuovo nodo
                nodo_option.setAttribute('id', provincia);
                //Inserisco il testo all'interno del nuovo nodo
                let testo_option = document.createTextNode(`${provincia}`);
                nodo_option.appendChild(testo_option);
                default_option.appendChild(nodo_option);
            });
        }
    }

}

