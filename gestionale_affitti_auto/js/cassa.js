if(verificaUtente()){
    document.getElementsByClassName('loader')[0].classList.add("hidden");
}
else{
    location.href = 'index.html';
}