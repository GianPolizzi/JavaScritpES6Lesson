function calcolaMaxMin(){
    var a, b, c, max, min, med;
    // Utilizzo il parseInt per convertirli in 3 numeri interi che sono assegnati alle variabili a, b, c
    a = parseInt(A.value);
    b = parseInt(B.value);
    c = parseInt(C.value);
    // Cerco il Max ed il min tra a e b
    if(a > b){
        max = a;
        min = b;
    }
    else {
        max = b;
        min = a;
    }
    //Cerco il Max ed il min tra c ed il valore precedente
    if(c > max){
        med = max;
        max = c;
    }
    else if(c < min){
        med = min;
        min = c;
    }
    else {
        med = c;
    } 
    result.innerHTML='Max: '+max+' med: '+med+' min: '+min;
}
