let colors = ['red', 'orange', 'yellow','green','aqua','blue','purple'];
let listEl = document.createElement("ul");

for (let i = 0; i < colors.length; i++) {
    let helloEl = document.createElement("li");
    helloEl.style.color = colors[i];
    helloEl.innerText = colors[i];
    listEl.appendChild(helloEl);
}

document.body.appendChild(listEl);

