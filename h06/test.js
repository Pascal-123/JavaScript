let cards = document.querySelectorAll(".cards");

function flipCard() {
    this.classList.toggle('flip')
}

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", flipCard)
}

const cardImages = document.querySelectorAll(".front");
let random = 0;
const randomNumbers = [];
while (randomNumbers.length < 18) {
    random = Math.floor(Math.random() * 18) + 1;
    if(randomNumbers.lastIndexOf(random) === -1) {
        randomNumbers.push(random);
    }
}
random = 0;
for (const cardImage in cardImages) {
    cardImages[cardImage].src = "img/card" + randomNumbers[random] + ".svg";
    random++;
}

//let ImageSource = document.getElementById("fuck").src;
//console.log(ImageSource);
