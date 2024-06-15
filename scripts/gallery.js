

let galleryEl = document.createElement("div");
galleryEl.className = "gallery";
document.body.appendChild(galleryEl);

let images = ["chairImages/redChair.png","chairImages/gardenChair.png","chairImages/hoverChair.png","chairImages/hoverCouch.png","chairImages/throne.png","chairImages/doubleDeckerCouch.png"];
let descriptions = ["let your spitits soar with our top of the line luxury chair!","rest,work, and eat in style!", "make the first impression...Impressive!","Take a good sitting down!","Well well well, if it isn't your new favorite chair","They say that a good chair keeps the doctor away!"]
for (let i =0; i<=39; i++) { 
    //creating the div for the gallery element
    let galleryItem = document.createElement("div");
    galleryItem.className = "galleryItem";
    galleryEl.appendChild(galleryItem);
    //creating an image for the gallery element
        

    let randomSrc = images[getRandomInt(images.length)];

    let galleryItemImg = document.createElement("img");
    galleryItemImg.src = randomSrc;
    galleryItemImg.className = "galleryItemImg";
    galleryItem.appendChild(galleryItemImg);
    //creating random prices

    let randPrice = getRandomInt(9999999);
    if (randPrice > 99 && randPrice < 999) {
        randPrice = "Less than your next gas refill"
    }
    if (randPrice > 9999999 && randPrice < 9999999) {
        randPrice = "Very Expensive, but the more expensive it is the better it is"
    }
    else {
        randPrice+=" Bitcoin"
    }

    let itemPrice = document.createElement("p");
    itemPrice.className = "galleryItemPrice";
    itemPrice.innerText = randPrice;
    galleryItem.appendChild(itemPrice);

    //creating random descriptions

    let randDescription = descriptions[getRandomInt(descriptions.length)];

    let itemText = document.createElement("p");
    itemText.className = "galleryItemText";
    itemText.innerText = randDescription;
    galleryItem.appendChild(itemText);
}