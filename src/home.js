const home = (() => {
    const container = document.createElement("div");
    const title     = document.createElement("h1");
    const subtitle  = document.createElement("h2");
    const text      = document.createElement("p");
    const text2     = document.createElement("p");
    const span      = document.createElement("span");

    const initializeContent = () => {
        createContent();
        return container;
    }

    const createContent = () => {
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
        title.textContent = "Pho";
        span.textContent = "♥";
        subtitle.textContent = "Wirklich schonmal erlebt?";
        text.textContent = "Ein purer Genuss aus dämpfender Suppe, dem besten Biorindfleisch aus der Region und frischen und duftenden Kräutern wie Minze und Koriander. Pho ist nicht nur ein Leckerbissen, sondern ein Leckererlebnis.";
        text2.textContent = "Ähh, und ich glaube, die Frau da rechts, isst gar kein Pho.";
    }


    return { initializeContent };
})();

export { home }; 