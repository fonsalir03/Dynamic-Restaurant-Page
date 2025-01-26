import bakeryImagePath from "./assets/bakery.png"

const generateHomeContent = (function(){
    const content = document.createElement("div");
    content.id = "content";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center"

    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center"

    const homeHeader = document.createElement("header");
    homeHeader.textContent = "dynamic header";

    const homeText = document.createElement("p");
    homeText.textContent = "dynamic text";
    homeText.style.textAlign = "center";
    homeText.style.fontSize = "large";

    const bakeryImage = document.createElement("img");
    bakeryImage.src = bakeryImagePath;
    bakeryImage.style.width = "10%"

    content.appendChild(homeHeader);
    content.appendChild(bakeryImage)
    content.appendChild(homeText);

    document.body.appendChild(content)
});

export {generateHomeContent};