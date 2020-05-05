const menu = (() => {
    const body      = document.querySelector("body");
    const container = document.createElement("div");
    const title     = document.createElement("h1");
    const subtitle  = document.createElement("h2");
    const text      = document.createElement("p");
    const text2     = document.createElement("p");
    const span      = document.createElement("span");
    const picture   = document.createElement("img");

    const addContent = () => {
        createContent();
        return container;
    }

    const addPicture = () => {
        return picture;
    }

    const createContent = () => {
        setBackground();
        setClassesAndIds();
        fillElementsWithContent();
        appendElements();
    }

    const appendElements = () => {
        container.appendChild(title);
        title.appendChild(span);
        container.appendChild(subtitle);
        container.appendChild(text);
        container.appendChild(text2);
    }

    const setClassesAndIds = () => {
        container.id = "text";
        picture.id = "picture";
        picture.src = "../images/pho1.jpg";
        text2.classList.add("price");
    }

    const fillElementsWithContent = () => {
        title.textContent = "Pho Bo";
        span.textContent = "♥";
        subtitle.textContent = "Pho mit Rindfleisch";
        text.textContent = "Nach südvietnamesischer Tradition, yum yum.";
        text2.textContent = "| 9.5 € |";
    }

    const setBackground = () => {
        body.style.backgroundImage = "url('../images/menu.jpg')";
        body.style.backgroundPosition = "center center";
    }


    return { addContent, addPicture };
})();

export { menu }; 