const contact = (() => {
    const body      = document.querySelector("body");
    const container = document.createElement("div");
    const title     = document.createElement("h1");
    const subtitle  = document.createElement("h2");
    const text      = document.createElement("p");
    const text2     = document.createElement("p");
    const span      = document.createElement("span");

    const addContent = () => {
        createContent();
        return container;
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
    }

    const fillElementsWithContent = () => {
        title.textContent = "Contact Us";
        span.textContent = "♥";
        subtitle.textContent = "Let's keep in touch";
        text.textContent = "Basin Street 09123 | New Orleans ";
        text2.textContent = "Phone: +49 412 9412 | chef@phophoall.com";
    }

    const setBackground = () => {
        body.style.backgroundImage = "url('../images/contact.jpg')";
        body.style.backgroundPosition = "center center";
    }


    return { addContent };
})();

export { contact }; 