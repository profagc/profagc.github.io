import { Navbar } from "../../components/navbar/navbar";
import "../../styles/about.css"
import type { Image, PageChangeFunction, Text } from "../../types/types";
import data from "./about-content.json" ;

interface HomeContent {
    heroImage: Image,
    textContent: Text,
}

const content = data as HomeContent;

function About(pageChangeFunction: PageChangeFunction): HTMLDivElement {
    const nav = Navbar("About", pageChangeFunction);
    
    const page = document.createElement("div");
    page.classList.add("page", "about-page");

    const pageContent = document.createElement("div");
    pageContent.classList.add("about-page-content");

    const hero = document.createElement("div");
    hero.classList.add("about-hero-image-container");

    const image = document.createElement("img");
    image.classList.add("about-hero-image");
    image.src = content.heroImage.image;
    image.alt = content.heroImage.alt;
    hero.append(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add("about-text-container");
    const header = document.createElement("h2");
    header.textContent = content.textContent.title;
    const text = document.createElement("div");
    text.classList.add("about-text-content");
    for (const t of content.textContent.content) {
        const p = document.createElement("p");
        p.textContent = t;

        text.append(p);
    }

    textContainer.append(header, text);
    pageContent.append(hero, textContainer);

    page.append(nav, pageContent);

    return page;
}

export { About };
