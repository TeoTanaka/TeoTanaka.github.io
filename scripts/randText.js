let names = ['Mack','Burdock','Ester'];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let nameEl = document.createElement("p");
nameEl.innerText = names[getRandomInt(names.length)];

randName.appendChild(nameEl);

console.log(names[getRandomInt(names.length)]);



