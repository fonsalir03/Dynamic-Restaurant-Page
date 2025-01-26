import "./styles.css";
import { generateHomeContent } from "./home.js";
import { generateMenuContent } from "./menu.js";
import { generateAboutContent } from "./about.js";


//add event listener for each header nav button
//  the event listeners will delete the parent container and add the content

//home button
const homeButton = document.querySelector("#homeButton");
//menu button
const menuButton = document.querySelector("#menuButton");
//about button
const aboutButton = document.querySelector("#aboutButton");

homeButton.addEventListener("click", function(){
    let content = document.querySelector("#content");
    content.remove();
    generateHomeContent();
})

menuButton.addEventListener("click", function(){
    let content = document.querySelector("#content");
    content.remove();
    generateMenuContent();
})
aboutButton.addEventListener("click", function(){
    let content = document.querySelector("#content");
    content.remove();
    generateAboutContent();
})
