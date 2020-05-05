const about = (() => {
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
        picture.src = "../images/pho2.jpg";

    }

    const fillElementsWithContent = () => {
        title.textContent = "About Pho Pho All";
        span.textContent = "♥";
        subtitle.textContent = "Unser Restaurant - mit Liebe und so";
        text.textContent = "I'm baby chartreuse YOLO vegan celiac cliche semiotics health goth master cleanse humblebrag retro copper mug truffaut. Hoodie neutra venmo typewriter actually viral man braid fam ramps air plant ugh echo park cold-pressed distillery semiotics. Edison bulb banh mi enamel pin pinterest pork belly whatever vegan direct trade chartreuse single-origin coffee lomo flexitarian. Meh meditation williamsburg selfies glossier. Selvage adaptogen shabby chic, photo booth tbh gastropub meggings chambray kombucha actually kickstarter kitsch tousled fashion axe chia. Narwhal XOXO iPhone pug glossier cardigan direct trade raclette dreamcatcher food truck venmo vexillologist hoodie kinfolk shoreditch. Chicharrones roof party viral, typewriter four dollar toast tilde coloring book synth kogi stumptown irony.";
        text2.textContent = "Literally ethical knausgaard typewriter jianbing lumbersexual tousled air plant echo park etsy pitchfork. Whatever godard distillery, single-origin coffee migas chia tattooed hoodie tumeric cliche drinking vinegar pork belly banjo. Art party mustache quinoa vaporware, offal kombucha messenger bag pop-up wayfarers XOXO listicle. Keffiyeh la croix you probably haven't heard of them offal trust fund tote bag sartorial. Kinfolk normcore kombucha hell of, art party listicle hoodie 8-bit.";
    }

    const setBackground = () => {
        body.style.backgroundImage = "url('../images/restaurant-outside.jpg')";
        body.style.backgroundPosition = "center center";
    }


    return { addContent, addPicture };
})();

export { about }; 