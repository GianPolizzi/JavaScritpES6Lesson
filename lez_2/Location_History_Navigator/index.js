//********************************* OGGETTO LOCATION *******************************

//Ottengo l'URL completo della mia pagina HTML
console.log(location.href);
//Ottengo il nome dell'Host server
console.log(location.hostname);
//Ottengo il nome del path del mio URL (senza il dominio)
console.log(location.pathname);

//Link ad una pagina web esterna al mio sito
function linkToGoogle(){
    location.assign('https://www.google.com/');
}

//Link ad una pagina web interna al mio sito
function linkToInfoPage(){
    location.assign('info.html');
}




//************************************ OGGETTO HISTORY *************************************

//Vai alla pagina successiva
function vaiAllaPross(){
    history.forward();
}

//Torna alla pagina precedente
function ritorna(){
    history.back();
}



//************************************ OGGETTO NAVIGATOR *****************************************

//Utile per sapere le specifiche del Browser utilizzato dall'utente
//Non sempre affidabile per sapere se si utilizza Mozilla, Chrome, Safari ecc

//Restituisce true se i miei cookie sono abilitati
console.log(navigator.cookieEnabled);

//Restituisce il nome del Browser che sto utilizzando (Netscape spesso)
console.log(navigator.appName);

//Versione del Browser
console.log(navigator.appVersion);

//Lingua utilizzata
console.log(navigator.language);