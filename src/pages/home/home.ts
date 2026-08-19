import { Navbar } from "../../components/navbar/navbar";
import type { Image, PageChangeFunction, Section, Text } from "../../types/types";
import "../../styles/home.css";

import data from "./home-content.json";

interface HomeContent {
    hero: Image,
    email: string,
    officeLocation: string,
    officeHours: Section<Text[]>,
    classes: Section<Text[]>,
}

const content = data as HomeContent;

function Home(pageChangeFunction: PageChangeFunction): HTMLDivElement {
    const nav = Navbar("Home", pageChangeFunction);

    const page = document.createElement("div");
    page.classList.add("page", "home-page");

    const pageContent = document.createElement("div");
    pageContent.classList.add("home-page-content");

    const left = document.createElement("div");
    left.classList.add("home-left");

    const heroImage = document.createElement("img");
    heroImage.classList.add("hero-image");
    heroImage.src = content.hero.image;
    heroImage.alt = content.hero.alt;

    left.append(heroImage);

    const right = document.createElement("div");
    right.classList.add("home-right");

    const email = document.createElement("p");
    email.classList.add("info-inline");
    email.innerHTML = `<span class="info-label">Email Address:</span> ${content.email}`;

    const officeLocation = document.createElement("p");
    officeLocation.classList.add("info-inline");
    officeLocation.innerHTML = `<span class="info-label">Office Location:</span> ${content.officeLocation}`;

    const officeHoursContainer = document.createElement("div");
    officeHoursContainer.classList.add("office-hours-container");

    const officeHoursHeader = document.createElement("h2");
    officeHoursHeader.classList.add("office-hours-header");
    officeHoursHeader.textContent = content.officeHours.title;

    const officeHoursCards = document.createElement("div");
    officeHoursCards.classList.add("cards-container");

    for (const oh of content.officeHours.content) {
        const card = document.createElement("div");
        card.classList.add("card-container");

        const cardHeader = document.createElement("h4");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = oh.title;


        const p = document.createElement("p");
        p.textContent = oh.content[0];

        card.append(cardHeader, p);
        officeHoursCards.append(card);
    }

    officeHoursContainer.append(officeHoursHeader, officeHoursCards);

    const classesContainer = document.createElement("div");
    classesContainer.classList.add("classes-container");

    const classesHeader = document.createElement("h2");
    classesHeader.classList.add("classes-header");
    classesHeader.textContent = content.classes.title;

    const classesCards = document.createElement("div");
    classesCards.classList.add("cards-container");

    for (const course of content.classes.content) {
        const card = document.createElement("div");
        card.classList.add("card-container");

        const cardHeader = document.createElement("h4");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = course.title;

        const p = document.createElement("p");
        p.textContent = course.content[0];

        card.append(cardHeader, p);
        classesCards.append(card);
    }

    classesContainer.append(classesHeader, classesCards);

    right.append(email, officeLocation, officeHoursContainer, classesContainer);

    pageContent.append(left, right);
    page.append(nav, pageContent);

    return page;
}

export { Home };
