const cards = document.querySelectorAll(".cards");
function flip() {
    this.classList.toggle("flip");
}

cards.forEach(card => card.addEventListener("click", flip));


