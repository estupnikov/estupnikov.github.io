let gallery = document.getElementById("cats-gallery");

for (let i=1; i<=4; i++) {
     let div = document.createElement("div");
     div.classList.add("img-container");
     gallery.appendChild(div);

     let img = document.createElement("img");
     img.src = "img/image" + i + ".jpg";
     img.classList.add("img-style");
     div.appendChild(img);

     let button = document.createElement("button");
     button.innerText = "Cat #" + i;      
     div.appendChild(button);
}

// **************

let buttons = document.getElementsByTagName("button");
for (button of buttons) {
    button.onclick = function(eventObject) {
        eventObject.target.style.backgroundColor = "green";
    }
    button.onmouseout = function(eventObject) {
        eventObject.target.style.backgroundColor = null;
    }
}
