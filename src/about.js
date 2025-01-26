const generateAboutContent = (function(){
    //be sure to add styles after ALL alements are created and children of the appropriate parents

    //create div#content container
    const content = document.createElement("div");
    content.id = "content";
    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.justifyContent = "center";
    container.style.gridTemplateRows = "min-content 1fr min-content 1fr";
    container.style.backgroundColor = "#ffcfd7";
    container.paddingBottom = "12px";

    content.appendChild(container);

    const missionHeader = document.createElement("h2");
    missionHeader.textContent = "Our Mission";
    missionHeader.style.margin = "0";
    missionHeader.style.height = "min-content";
    missionHeader.style.justifySelf = "center";
    container.appendChild(missionHeader);

    const missionContainer = document.createElement("div");
    missionContainer.style.border = "solid 1px";
    missionContainer.style.width = "max-content";
    missionContainer.style.padding = "10px";
    missionContainer.style.justifySelf = "center";
    missionContainer.style.width = "50%";
    container.appendChild(missionContainer);

    const missionText = document.createElement("p");
    missionText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    missionContainer.appendChild(missionText);

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us";
    contactHeader.style.margin = "0";
    contactHeader.style.height = "min-content";
    contactHeader.style.justifySelf = "center";
    container.appendChild(contactHeader);

    const contactContainer = document.createElement("div");
    contactContainer.style.border = "solid 1px";
    contactContainer.style.width = "max-content";
    contactContainer.style.padding = "10px";
    contactContainer.style.justifySelf = "center";
    contactContainer.style.width = "50%";
    container.appendChild(contactContainer);
    
    const phoneContainer = document.createElement("div");
    phoneContainer.textContent = "Phone: 551-550-2233"
    contactContainer.appendChild(phoneContainer);

    const addressContainer = document.createElement("div");
    addressContainer.textContent = "123 Mainstreet Plaza, Houston TX"
    contactContainer.appendChild(addressContainer)

    document.body.appendChild(content)

    
});

export {generateAboutContent}