import bakeryImagePath from "./assets/bakery.png"

const generateHomeContent = (function(){
    const homeHeader = document.createElement("header");
    homeHeader.textContent = "dynamic header";

    const homeText = document.createElement("p");
    homeText.textContent = "dynamic text";

    const bakeryImage = document.createElement("img");
    bakeryImage.src = bakeryImagePath;

    content.appendChild(homeHeader);
    content.appendChild(bakeryImage)
    content.appendChild(homeText);
});

export {generateHomeContent};