import { home } from "./home";
import { nav } from "./nav";

const Dom = (() => {
    const content       = document.querySelector("#content");
    const navigation    = document.querySelector("#main-nav");
    const body          = document.querySelector("body");


    const createHome = () => {
        body.style.backgroundImage = "url('../images/woman-eating.jpg')";
        body.style.backgroundPosition = "top";

        createNav();
        content.appendChild(home.initializeContent());
    }

    const createAbout = () => {
        body.style.backgroundImage = "url('../images/restaurant-outside.jpg')";
        body.style.backgroundPosition = "center center";
        createNav();
    }

    const createNav = () => {
        nav.initializeContent();
        navigation.appendChild(nav.getLogo());
        navigation.appendChild(nav.getNav());
    }

    return { createHome, createAbout };
})();
Dom.createAbout();

const logo = document.querySelector("#logo");
const about = document.querySelector("#about");

logo.addEventListener("click", (e) => {
    Dom.createHome();
});

about.addEventListener("click"), (e) => {
    Dom.createAbout();
}



