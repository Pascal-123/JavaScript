// create an array of all elements using the ".cards" css selector
let cards = document.querySelectorAll(".cards");

// toggle class "flip" when function is called for
function flipCard() {
    this.classList.toggle('flip');
}

// add addEventListener to every item in the "cards" array
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", flipCard)
}

// shuffle the cards on refresh
// comment: voeg later een button toe die deze function oproept op de webpage zelf.
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

// Clicking on 2 matching cards temporarily prevents the user from clicking on other cards and awards them with a point.

// comment: zet deze if statement in een function en roep de funcion pas op als function "flip" wordt opgeroepen.
if (cards[0].dataset.framework === cards[1].dataset.framework) {
    console.log("rfhvjb")
}



