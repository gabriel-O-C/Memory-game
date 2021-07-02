// DOM ELEMENTS
const cards = document.querySelectorAll(".card");

// END OF DOM ELEMENTS
// VARIABLES
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// END OF VARIABLES

// ADD CSS CLASSES
function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    lockBoard = true;


    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.classList.remove('flip');

       resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 12);
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

