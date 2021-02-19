//PRIMO METODO (più usato)
//Evento che reagisce al passaggio con il mouse
function mouseActiveEvent(){
    document.getElementById('titolo').innerHTML = 'Sono sopra con il mouse';
}
//Eventi che reagisce quando tolgo il mouse
function mouseDisactiveEvent(){
    document.getElementById('titolo').innerHTML = 'Non sono più sopra con il mouse';
}




//SECONDO METODO (meno usato)
//Evento che reagisce al passaggio con il mouse
function mouseActiveEvent2(){
    document.getElementById('titolo-2').innerHTML = 'Sono sopra con il mouse 2';
}
//Eventi che reagisce quando tolgo il mouse
function mouseDisactiveEvent2(){
    document.getElementById('titolo-2').innerHTML = 'Non sono più sopra con il mouse 2';
}
document.getElementById('display-2').onmouseover = mouseActiveEvent2;
document.getElementById('display-2').onmouseout = mouseDisactiveEvent2;





//TERZO METODO (utile per aggiungere più eventi)
//Evento che reagisce al passaggio con il mouse
function mouseActiveEvent3(){
    document.getElementById('titolo-3').innerHTML = 'Sono sopra con il mouse 3';
}
//Eventi che reagisce quando tolgo il mouse
function mouseDisactiveEvent3(){
    document.getElementById('titolo-3').innerHTML = 'Non sono più sopra con il mouse 3';
}
//addEventListener(nome evento, funzione)
document.getElementById('display-3').addEventListener('mouseover', mouseActiveEvent3);
document.getElementById('display-3').addEventListener('mouseout', mouseDisactiveEvent3);