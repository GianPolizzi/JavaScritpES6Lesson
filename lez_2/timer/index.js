function saluta(){
    console.log('Ciao');
}
//setTimeout(funzione, millisecondi di attesa prima di farla partire)
let timer = setTimeout(saluta, 3000);

//setInterval(funzione, millisecondi di attesa prima di eseguirla)
//Questa funzione viene eseguita all'infinito
let intervallo = setInterval(function(){
    console.log('Ciao Mondo');
}, 2000)

//Oppure
let intervalloArrow = setInterval(() => {
    console.log('Ciao Arrow Function');
}, 2000)