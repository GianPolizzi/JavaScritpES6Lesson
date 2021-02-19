var prenotazioni = [];
var anagrafica = [];

function getCli(nome){
    return anagrafica[nome];
}

function getState(affitto){
    return anagrafica[affitto] = false;
}

function getCliente(){
    
    let clientiDB = JSON.parse(window.localStorage.getItem('clienti'));
    //anagrafica = clientiDB;
    let selectCliente = document.getElementById('cliente');

    clientiDB.forEach((cliente) => {
        let option = document.createElement('option');
        option.text = cliente.name;
        selectCliente.add(option);
    });

    document.getElementById('clienti').appendChild(clientiDB);
}


function getTabellaAffitti(){

}


function caricaTabellaAffitti(){

}


function inserisciNuovoAffitto(){
    //Collego le variabili al form dell'HTML
    let nome = document.getElementById('cliente').value;
    let marca = document.getElementById('marca-auto').value;
    let modello = document.getElementById('modello-auto').value;
    let data = document.getElementById('data-noleggio').value;

}



function caricaSelect(){
    let selNome = document.getElementById('cliente').value;
    let selMarca = document.getElementById('marca-auto').value;
    //let selModello = document.getElementById('modello-auto').value;



    anagrafica.forEach((client) => {
        if(client.affitto == false )
        {
            //non ha un'auto noleggiata, si può stampare
        } else {
            // ha già in possesso un'auto, non stampare
        }
    });
    

}



window.onload = function() {
    if(verificaUtente()){
        document.getElementsByClassName('loader')[0].classList.add("hidden");

        if(window.localStorage.getItem('affitti-clienti') == null){
                window.localStorage.setItem('affitti_clienti', JSON.stringify(prenotazioni));
                caricaTabellaAffitti();
            
        }
        else{
            prenotazioni = JSON.parse(window.localStorage.getItem('affitti-clienti'));
            caricaTabellaAffitti();
        }
    }
    else{
        location.href = 'index.html';
    }
}



