//assigning random names
let names = ['Mack','Ester'];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomName = names[getRandomInt(names.length)];

let randNameEls = document.querySelectorAll(".randName");
for(const randNameEl of randNameEls){
    randNameEl.innerText = randomName;
}

//assigning random places
let places = ['Marin','San Francisco'];

let randomPlace = places[getRandomInt(places.length)];

let randPlaceEls = document.querySelectorAll(".randPlace");
for(const randPlaceEl of randPlaceEls){
    randPlaceEl.innerText = randomPlace;
}
console.log(randomPlace);


