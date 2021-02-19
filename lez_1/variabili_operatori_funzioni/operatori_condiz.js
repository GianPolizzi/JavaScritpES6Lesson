/*********************************** ISTRUZIONE IF-ELSE ************************************/

//Istruzione IF semplice
if (x<10){
    return "x è minore di 10";
}


//Istruzione IF ELSE
if (x<10 && x!=0){
    return "x è minore di 10 ma diversa da zero";
}
else if(x==0){
    return "x è uguale a zero"
}
else return "x è maggiore o uguale a 10";


//Operatore ternario
let stringa = 5 > 6 ? 'vero' : 'falso';

/****************************************** SWITCH-CASE ********************************/

//Istruzione SWITCH CASE
switch (condizione){
    case 'operazione1':
        return (arg1 + arg2);
        break;
    
    case 'operazione2':
        return (arg1 - arg2);
        break;

    case 'operazione3':
        return (arg1*arg2);
        break;

    case '':
        break;
    default:
        //istruzione
        break;
}

/******************************************* CICLI FOR *****************************************/

//Istruzione FOR
for(let i=0; i<10; i++){
    //Istruzioni
    //break: interrompe ed esce dal ciclo
    //continue: salta un valore e va avanti per ciclare
}

//Creazione tabella
let tabella = '<table border="1">'
for(let i = 0; i < 4; i++){
    tabella += '<tr>';
    for(let j = 0; j < 5; j++){
        tabella += '<td>Cella ['+i+']' + '['+j+']</td>';
    }
    tabella += '</tr>';
}
tabella += '</table>';
document.getElementById('tabella').innerHTML = tabella;

//Istruzione FOR-IN: cicla oggetti
let oggettoDaCiclare = {
    a: 6,
    b: 'stringa1',
    c: true
};
for(let prop in oggettoDaCiclare){
    console.log('Propietà: '+prop+' e valore: '+oggettoDaCiclare[prop]);
}

//Istruzione FOR-OF: cicla stringhe ed oggetti
let arrayDaCiclare = ['primo', 'secondo', 'terzo'];
for(let elem of arrayDaCiclare){
    console.log('Elemento: '+elem);
}


//Istruzione FOR-EACH
var myArray = ["Pippo", "Pluto", "Topolino"];
myArray.forEach(function(item){
    document.write(item+'<br>');
})

/*************************************** WHILE E DO WHILE ************************************* */

//Istruzione WHILE
let j = 0;
while(j<10){
    //Istruzioni
    console.log(j);
    j++;
}

//Istruzione DO-WHILE
do{
    //Istruzioni
}while(j<10);