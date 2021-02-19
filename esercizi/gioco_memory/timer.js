//VARIABILI GLOBALI TEMPO
var mostra_tempo = "";
//Fermo = true; Attivo = false
var ferma_tempo = true;
var minuti = 0;
var secondi = 0;
var decimi = 0;
var conta_record = 0;

//BOTTONE START GAME
function start(){
    

    avviaTimer();
    //start memo (inizializza il gicoco)
    /*
    let m = new Memory();
    m.startmemo();
    inizializzaCarte();
    */
}

//AZZERA ED AVVIA TEMPO
function avviaTimer(){

    if (ferma_tempo == true){
        minuti = 0;
        secondi = 0;
        decimi = 0;
        ferma_tempo = false;
        contaTempo();
    }
}

//TIMER
function contaTempo(){
    if(ferma_tempo == false){ 
        secondi+=1;
        if(secondi>59){
            secondi=0;
            minuti+=1;
        }
        if(minuti<10){
            mostra_tempo = "0" + minuti;
        }
        else{
            mostra_tempo = minuti;
        }
        if(secondi<10){
            mostra_tempo = mostra_tempo + ":0" + secondi;
        }
        else{
            mostra_tempo = mostra_tempo + ":" + secondi;
        }
        mostra_tempo = mostra_tempo;

        document.getElementById("mostra-timer").value = mostra_tempo;
        setTimeout("contaTempo()",1000);
    }  
}

function stopTimer(){
    ferma_tempo = true;
}

function salvaTempo(){
    //Prelevo il tempo e lo salvo dentro uno slot (grafico)
    if (ferma_tempo == true){
        conta_record += 1;
        let nomeGiocatore = document.getElementById('input-name').value;
        let punteggi = document.getElementById('punteggi');
        let nodo_record = document.createElement('h4');
        let record = document.createTextNode(`${conta_record}) ${nomeGiocatore} | Tempo ${mostra_tempo} | Coppie sbagliate: ${mossa_sbagliata}`);
        punteggi.appendChild(nodo_record);
        nodo_record.appendChild(record);
    }
}

function stopAndSave(){
    stopTimer();
    salvaTempo();
}