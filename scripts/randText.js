//assigning random names
let names = ['High-Tech','Supaaa', 'Super','The Best of the Best', 'Crème de la Crème','Immaculate','Engineer Gaming'];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomName = names[getRandomInt(names.length)];

let randNameEls = document.querySelectorAll(".randName");
for(const randNameEl of randNameEls){
    randNameEl.innerText = randomName;
}

//assigning random places
let places = ['Marin','San Francisco','Pluto','Tiburon','Palo Alto','Hamburg','The Asteroid Belt','Atlantis'];

let randomPlace = places[getRandomInt(places.length)];

let randPlaceEl = document.querySelector(".randPlace");

randPlaceEl.innerText = randomPlace;

console.log(randomPlace);

//assigning random dates
let dates = ['the beginning of time','1826','1963','2024','4028','1492'];

let randomDate = dates[getRandomInt(dates.length)];

let randDateEls = document.querySelectorAll(".randDate");
for(const randDateEl of randDateEls){
    randDateEl.innerText = randomDate;
}
console.log(randomDate);


