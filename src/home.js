import bakeryImagePath from "./assets/bakery.png"

const generateHomeContent = (function(){
    console.log(content)
//create header elem
//add relavent text to header
const homeHeader = document.createElement("header");
homeHeader.textContent = "dynamic header";

//create p elem
const homeText = document.createElement("p");
homeText.textContent = "dynamic text";
//add relavent text to p

//import img
const bakeryImage = document.createElement("img");
bakeryImage.src = bakeryImagePath;


//append header to div#content
content.appendChild(homeHeader);
//append img to div#content
content.appendChild(bakeryImage)
//append p to div#content
content.appendChild(homeText);
});

export {generateHomeContent};