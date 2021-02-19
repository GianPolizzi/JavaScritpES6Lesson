//Web storage object

//LOCAL STORAGE
//getItem('chiave')
let coloreLStorage = window.localStorage.getItem('colore');
if(!coloreLStorage){
    let colore = prompt('Please insert color:');
    //setItem('chiave', valore)
    window.localStorage.setItem('colore', colore);
    document.body.style.backgroundColor = colore;
}
else{
    document.body.style.backgroundColor = coloreLStorage;
}

function cambiaColore(){
    window.localStorage.setItem('colore', '');
    location.reload();
}




// //SESSION STORAGE
// //All'interno di getItem() specifico la chiave
// let coloreSStorage = window.sessionStorage.getItem('colore');
// if(!coloreSStorage){
//     let colore = prompt('Please insert color:');
//     window.sessionStorage.setItem('colore', colore);
//     document.body.style.backgroundColor = colore;
// }
// else{
//     document.body.style.backgroundColor = coloreSStorage;
// }

// function cambiaColore(){
//     window.sessionStorage.setItem('colore', '');
//     location.reload();
// }