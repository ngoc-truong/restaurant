import { home } from "./home";
import { nav } from "./nav";
import { about } from "./about";
import { contact } from "./contact";
import { menu } from "./menu";

const Dom = (() => {
    const content       = document.querySelector("#content");
    const navigation    = document.querySelector("#main-nav");
    const body          = document.querySelector("body");
    const pic           = document.querySelector("#picture");

    const initialize = () => {
        createHome();
    }

    const createHome = () => {
        resetContent();
        content.appendChild(home.addContent());
    }

    const createAbout = () => {
        resetContent();
        content.appendChild(about.addContent());
        content.appendChild(about.addPicture());
    }

    const createMenu = () => {
        resetContent();
        content.appendChild(menu.addContent());
        content.appendChild(menu.addPicture());
    }

    const createContact = () => {
        resetContent();
        content.appendChild(contact.addContent());
    }

    const createNav = () => {
        nav.initializeContent();
        navigation.appendChild(nav.getLogo());
        navigation.appendChild(nav.getNav());
    }



    const resetContent = () => {
        content.textContent = "";
    }

    return { initialize, createNav, createHome, createAbout, createMenu, createContact };
})();


Dom.createNav();
Dom.initialize();

const logoLink    = document.querySelector("#logo");
const aboutLink   = document.querySelector("#about");
const menuLink    = document.querySelector("#menu");
const contactLink = document.querySelector("#contact");

logoLink.addEventListener("click", (e) => {
    Dom.createHome();
})

aboutLink.addEventListener("click", (e) => {
    Dom.createAbout();
})

menuLink.addEventListener("click", (e) => {
    Dom.createMenu();
})

contactLink.addEventListener("click", (e) => {
    Dom.createContact();
})