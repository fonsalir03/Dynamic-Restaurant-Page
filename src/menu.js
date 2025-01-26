import croissantImagePath from "./assets/croissant.png";

const generateMenuContent = (function(){
    const content = document.createElement("div");
    content.id = "content";
    content.style.display = "flex";
    content.style.justifyContent = "center";

    const menu = document.createElement("div");
    menu.style.backgroundColor = "#ffcad2";
    menu.style.display = "grid";
    menu.style.gridTemplateColumns = ".35fr .35fr .35fr";
    menu.style.padding = "10px";
    menu.style.borderRadius = "10px";
    menu.style.gap = "10px";

    //three divs
    const menuItem1 = document.createElement("div");
    menuItem1.style.display = "flex";
    menuItem1.style.flexDirection = "column";
    menuItem1.style.alignItems = "center"

    //image
    const crossaintImage = document.createElement("img");
    crossaintImage.src = croissantImagePath;
    crossaintImage.style.width = "100px";

    menuItem1.append(crossaintImage);

    //h2
    const menuItemHeader = document.createElement("h2");
    menuItemHeader.textContent = "Item Name";
    menuItem1.appendChild(menuItemHeader);

    //p
    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    menuItemDescription.style.textAlign = "center"
    menuItem1.appendChild(menuItemDescription);

    //menuItem clones
    const menuItem2 = menuItem1.cloneNode(true);
    const menuItem3 = menuItem1.cloneNode(true);
    
    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    content.appendChild(menu);

    document.body.appendChild(content);

})

export {generateMenuContent}