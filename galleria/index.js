const serverURL = 'http://localhost:3000/';
const pathUsers = 'users/';
const pathAlbums = 'albums/';
const pathPhotos = 'photos/';
var users;
var albums;
var photos;


function getPhotos(id){

    console.log(id);
}



async function getAlbum(){
    let userID = document.getElementById('utenti').value;
    //Prelevo le 10 options (è un array) e inserisco come indice il puntatore all'id per ottenere il nome selezionato (con innerText)
    let nome = document.getElementById('utenti').options[document.getElementById('utenti').options.selectedIndex].innerText;
    //Collego alla select
    document.getElementById('userSelected').innerHTML = nome;

    let albums$ = await fetch(serverURL+pathUsers+userID+'/'+pathAlbums).then((res) => res.json());

    let tagCol = '';
    albums$.forEach(async(album) => {

        let imgs$ = await fetch(serverURL+pathAlbums+album.id+'/'+pathPhotos).then((response) => response.json());

        let imgs = [];
        imgs$.forEach((img,index) => {
            if(index == 0){
                imgs.push(img.thumbnailUrl)
            }
        });

        tagCol += `
        <div class="col-3">
        <div class="albums" style="background-image:url('${imgs[0]}')" onclick="getPhotos('${album.id}')">
        </div>
        </div>`;

        document.getElementById('contentAlbum').innerHTML = tagCol;
    });
    

}

//Pongo il client in attesa della Promise del Server
async function getUsers(){
    let users$ = await fetch(serverURL+pathUsers).then(response => response.json());
    return users$;
}

function inizializzazione(){
    let users = getUsers();
    let optionTag = '';
    //Qui inserisco il secondo then riferito agli utenti per farmeli restituire dal server
    users.then((usr) => {
        //Ciclo gli utenti per prenderli uno per uno e li innesto in una option dell'HTML
        usr.forEach(utente => {
            optionTag += `<option value="${utente.id}">${utente.name} ${utente.username}</option>`;
            
        });
        document.getElementById('utenti').innerHTML = optionTag
    });
}

//All'avvio del browser e del caricamento della pagina HTML viene invocata la funzione di inizializzazione
window.onload = function(){
    inizializzazione();
}