const images = document.getElementsByTagName("img");
let random = 0;
const randomNumbers = [];
while (randomNumbers.length < 9 ) {
    random = Math.floor(Math.random() * 9) + 1;
    if (randomNumbers.lastIndexOf(random) === -1) {
        randomNumbers.push(random);
    }
}

random = 0;
for (const image in images) {
    images[image].src = "img/card" + randomNumbers[random] + ".svg";
    random++;
}
