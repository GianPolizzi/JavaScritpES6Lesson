const dati = {
    piemonte: {
       alessandria: ['Acqui Terme', 'Alessandria'],
       biella: ['Biella', 'Brusnengo', 'Casapinta', 'Mongrando'],
       torino: ['Torino']
    },
    sicilia: {
       catania: ['Aci Castello', 'Aci Catena', 'Bronte', 'Catania'],
       enna: ['Centuripe']
    },
    toscana: {
       firenze: ['Campi Bisenzio', 'Empoli', 'Firenze'],
       lucca: ['Lucca'],
       pisa: ['Bientina', 'Pisa', 'Pontedera', 'Terricciola'],
       pistoia: ['Montecatini Terme', 'Pistoia']
    }
 };
 
 function getProvince(key) {
    return dati[key];
 };
 
 function getComuni(r, p) {
    return dati[r][p];
 };
 
 //FUNZIONE PER CREARE IL SECONDO SELECT ED AGGIUNGERE LE OPZIONI
 function regioneSelezionata() {
 
    //Creo una variabile e la collego all'id dell'HTML
    let regione = document.getElementById('selectRegioni').value;
    //Creo una variabile e la collego all'id dell'HTML che creerò col JS
    let domProvince = document.getElementById('selectProvince');
 
    //Se esiste già questa variabile, la rimuove (evita che si creano infinite select)
    if (domProvince) {
       domProvince.remove();
    }
 
    //Creo un tag "select" nell'HTML e lo deposito nella variabile selectProvince
    let selectProvince = document.createElement('select');
    //Aggiungo al select la class="form-control mt-4"
    selectProvince.classList.add('form-control', 'mt-4');
    selectProvince.id = 'selectProvince';
    //Aggiungo al select l'evento onchange="provinciaSelezionata()" che è una funzione
    selectProvince.onchange = function () { provinciaSelezionata() };
 

    //Creo un tag "option" nell'HTML da concatenare al secondo "select" e lo deposito nella variabile defaultOption
    let defaultOption = document.createElement('option');
    //Aggiungo alla option il testo visibile all'utente
    defaultOption.text = "-- Seleziona una provincia --";
    //Aggiungo alla option la specifica disabled true
    defaultOption.disabled = true;
    //Aggiungo alla option la specifica selected true (sarà l'opzione selezionata di default)
    defaultOption.selected = true;
    //Aggiungo questa variabile option al tag "select" con id="selectProvince"
    selectProvince.add(defaultOption);
 
    //Il metodo Object.entries() restituisce una coppia non ordinata [key, value]
    for (let [p] of Object.entries(dati[regione])) {
        //Creo un tag option e lo deposito nella variabile option
       let option = document.createElement('option');
       //charAt() restituisce il primo carattere della stringa raggiunta da p (ovvero la provincia)
       //toUpperCase() la pone maiuscola
       //slice(1) cancella il secondo carattere della stringa e lo rimpiazza con uno spazio vuoto
       option.text = p.charAt(0).toUpperCase() + p.slice(1).replace("-", " ");
       //Aggiungo un value='p' al tag option
       option.value = p;
       //Aggiungo il tag option al tag "select" con id="selectProvince"
       selectProvince.add(option);
    };
 
    //Appendo tutto quello che ho creato nell'id="selectProvince" all'HTML dove ho l'id="province"
    document.getElementById('province').appendChild(selectProvince);
 
 };
 
 //FUNZIONE PER CREARE IL TERZO SELECT ED AGGIUNGERE LE OPZIONI
 function provinciaSelezionata() {
 
    let regione = document.getElementById('selectRegioni').value;
 
    let provincia = document.getElementById('selectProvince').value;
    let domComuni = document.getElementById('selectComuni');
 
    if (domComuni) {
       domComuni.remove();
    }
 
    let selectComuni = document.createElement('select');
    selectComuni.classList.add('form-control', 'mt-4');
    selectComuni.id = 'selectComuni';
 
    let defaultOption = document.createElement('option');
    defaultOption.text = "-- Seleziona un comune --";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectComuni.add(defaultOption);
 
    //Un oggetto map esegue l'iterazione dei suoi elementi nell'ordine d'inserimento: 
    //un ciclo (for of ...) restituisce un array di [key, value] per ogni iterazioni
    getComuni(regione, provincia).map((comune) => {
       let option = document.createElement('option');
       option.text = comune;
       option.value = comune.toLowerCase().replace(" ", "-");
       selectComuni.add(option);
    });
 
    document.getElementById('comuni').appendChild(selectComuni);
 
 };