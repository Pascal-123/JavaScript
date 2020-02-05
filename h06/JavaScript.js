// maakt een lijst van alle elementen die de ".cards" css selector gebruiken
let cards = document.querySelectorAll(".cards");

cardsShuffle();

let hasFlippedCard = false;
let firstCard, secondCard;

// deze function wordt opgeroepen zodra de "addEventListener" wordt geactiveerd
function flipCard() {
    // "this" verwijst naar de card waar op geklikt wordt een voegt daar vervolgens een class een toe
    this.classList.add('flip');
    // hasFlippedCard is standaard al false dus deze if statement wort uitgevoerd
    if (hasFlippedCard === false) {
        // hasFlippedCard switched van false naar true en firstCard wordt nu de kaart waarop geklikt is
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // hasFlippedCard switched van true naar false en secondCard wordt nu de kaart waarop geklikt is
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.matching === secondCard.dataset.matching) {
        disableCards();
    } else {
        unflipCards();
    }
}

// als de dataset van 2 cards matchen, "removeEventListener" zodat je dat cards niet terug kan "flippen"
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

// als de dataset van 2 cards NIET matchen, "flip" de kaarten terug naar hun originele staat
function unflipCards() {
    setTimeout(function () {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);

}

function cardsShuffle() {
    cards.forEach(function(card) {
        card.style.order = Math.floor(Math.random() * 18);
    })
}
// loop door de "cards" array en voeg een "addEventListener" toe
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", flipCard)
}



