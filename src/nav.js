const nav = (() => {
    const container = document.createElement("div");
    const logo  = document.createElement("div");
    const nav   = document.createElement("div");
    const ul    = document.createElement("ul");
    const li    = [];
    const a     = [];

    for (let i = 0; i < 3; i++) {
        li[i] = document.createElement("li");
    }

    for (let i = 0; i < 3; i++) {
        a[i] = document.createElement("a");
    }

    const initializeContent = () => {
        setClassesAndIds();
        fillElementsWithContent();
        appendElements();
    }

    const getLogo = () => {
        return logo;
    }

    const getNav = () => {
        return nav;
    }


    const appendElements = () => {
        for (let i = 0; i < 3; i++) {
            li[i].appendChild(a[i]);
        }

        for (let i = 0; i < 3; i++) {
            ul.appendChild(li[i]);
        }

        nav.appendChild(ul);
        container.appendChild(logo);
        container.appendChild(nav);
    }

    const setClassesAndIds = () => {
        logo.id = "logo";
        nav.id = "nav";
        a[0].id = "about";
        a[1].id = "menu";
        a[2].id = "contact";
    }

    const fillElementsWithContent = () => {
        logo.textContent = "Pho Pho All";
        a[0].textContent = "About";
        a[1].textContent = "Menu";
        a[2].textContent = "Contact";
    }

    return { initializeContent, getLogo, getNav };
})();

export { nav };