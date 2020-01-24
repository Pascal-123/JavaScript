let card = document.getElementsByClassName("cards");
let cards = [...card];

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
}

var displayCard = function () {
    this.classList.toggle("open")
};