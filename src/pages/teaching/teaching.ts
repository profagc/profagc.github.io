import { Navbar } from "../../components/navbar/navbar";
import "../../styles/teaching.css";
import type { InteractiveCard, PageChangeFunction, Section, Text } from "../../types/types";
import data from "./teaching-content.json"


interface TeachingContent {
    philosophy: Text,
    innovations: Section<Text[]>,
    classes: Section<InteractiveCard[]>,
}

function showPopup(card: InteractiveCard) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("classes-popup");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("card-header-container");

    const header = document.createElement("h2");
    header.classList.add("card-header");
    header.textContent = card.title;

    const close = document.createElement("span");
    close.textContent = "✖";
    close.classList.add("classes-popup-close");
    close.onclick = () => { dialog.close(); dialog.remove(); }

    headerContainer.append(header, close);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("classes-popup-content-container");

    for (const t of card.content) {
        const p = document.createElement("p");
        p.textContent = t;

        contentContainer.append(p);
    }

    dialog.append(headerContainer, contentContainer);

    dialog.onclose = () => { dialog.close(); dialog.remove(); }

    const app = document.getElementById("app")!;

    app.append(dialog);

    dialog.showModal()
}

const content = data as TeachingContent;

function Teaching(pageChangeFunction: PageChangeFunction): HTMLDivElement {
    const nav = Navbar("Teaching", pageChangeFunction);

    const page = document.createElement("div");
    page.classList.add("page", "teaching-page");

    const pageContent = document.createElement("div");
    pageContent.classList.add("teaching-page-content");

    const philosophyContainer = document.createElement("div");
    philosophyContainer.classList.add("teaching-philsophy-container");
    const philosophyHeader = document.createElement("h2");
    philosophyHeader.classList.add("teaching-philsophy-header");
    philosophyHeader.textContent = content.philosophy.title;

    const philosophyTextContainer = document.createElement("div");
    philosophyTextContainer.classList.add("teaching-philsophy-text-container")

    for (const t of content.philosophy.content) {
        const text = document.createElement("p");
        text.textContent = t;

        philosophyTextContainer.append(t);
    }

    philosophyContainer.append(philosophyHeader, philosophyTextContainer);

    const innovationsContainer = document.createElement("div");
    innovationsContainer.classList.add("innovations-container");

    const innovationsHeader = document.createElement("h2");
    innovationsHeader.classList.add("innovations-header");
    innovationsHeader.textContent = content.innovations.title;

    const innovationsCardsContainer = document.createElement("div");
    innovationsCardsContainer.classList.add("cards-container");

    for (const cardContent of content.innovations.content) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        const cardHeader = document.createElement("h4");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = cardContent.title;

        const cardTextContainer = document.createElement("ul");
        cardTextContainer.classList.add("card-text-container");

        for (const t of cardContent.content) {
            const p = document.createElement("li");
            p.textContent = t;
            cardTextContainer.append(p);
        }

        cardContainer.append(cardHeader, cardTextContainer);
        innovationsCardsContainer.append(cardContainer);
    }

    innovationsContainer.append(innovationsHeader, innovationsCardsContainer);

    const classesContainer = document.createElement("div");
    classesContainer.classList.add("classes-container");
    const classesHeader = document.createElement("h2");
    classesHeader.classList.add("classes-header");
    classesHeader.textContent = content.classes.title;

    const classesCardsContainer = document.createElement("div");
    classesCardsContainer.classList.add("cards-container");

    for (const cardContent of content.classes.content) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        const cardHeader = document.createElement("h4");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = cardContent.title;

        const cardTextContainer = document.createElement("p");
        cardTextContainer.classList.add("card-text-container");
        cardTextContainer.textContent = cardContent.preview;

        const cardViewButton = document.createElement("button");
        cardViewButton.classList.add("classes-card-button");
        cardViewButton.textContent = "View";
        cardViewButton.onclick = () => showPopup(cardContent);

        cardContainer.append(cardHeader, cardTextContainer, cardViewButton);
        classesCardsContainer.append(cardContainer);
    }

    classesContainer.append(classesHeader, classesCardsContainer);

    pageContent.append(philosophyContainer, innovationsContainer, classesContainer);

    page.append(nav, pageContent);

    return page;
}

export { Teaching };
