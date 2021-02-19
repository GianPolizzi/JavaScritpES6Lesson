//Ritorna una nodelist statica che rappresenta un elenco di elementi dell'HTML che corrispondono
// al gruppo specificato di selettori
const cards = document.querySelectorAll('.memory-card');

const flipAll = document.querySelectorAll('.flip').length;
console.log(flipAll);

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
var mossa_sbagliata = 0;

//Ruota la carta
function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        //Primo click
        hasFlippedCard = true;
        firstCard = this;

        avviaTimer();
    }
    else{
        //Secondo click
        hasFlippedCard = false;
        secondCard = this;
        matching();  
    }
}

//Controlla la coppia
function matching(){
    //matching?
    let carta1 = firstCard.dataset.framework;
    let carta2 = secondCard.dataset.framework;
    if(carta1 === carta2){
        //It's a match!

        console.log(' Carte scoperte',flipAll);
        if(flipAll === 5){
            stopAndSave();
        }

        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();

        
    }
    else{
        //Not a match
        lockBoard = true;
        mossa_sbagliata++;
        console.log(mossa_sbagliata);
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 2000);
    }
}

//Reset
function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Mischia carte
function shuffleCard(){
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        return (card.style.order = randomPos);
    })
}

//Parte al caricamento della pagina
this.onload = () => {
    shuffleCard();
}

//Aggiungo un evento ad ogni carta ('nome evento', azione da eseguire)
cards.forEach(card => card.addEventListener('click', flipCard));
