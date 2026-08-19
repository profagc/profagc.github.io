import { Navbar } from "../../components/navbar/navbar";
import type { Image, PageChangeFunction, Section, Text } from "../../types/types";
import data from "./research-content.json";
import "../../styles/research.css";

interface ResearchCard {
    title: string,
    image?: Image,
    description: string[],
    startDate: string,
    endDate: string,
    contact: string,
}

interface ResearchContent {
    interests: Text,
    researchGroups: Section<ResearchCard[]>,
}

const content = data as ResearchContent;

function Research(pageChangeFunction: PageChangeFunction): HTMLDivElement {
    const nav = Navbar("Research", pageChangeFunction);

    const page = document.createElement("div");
    page.classList.add("page", "research-page");

    const pageContent = document.createElement("div");
    pageContent.classList.add("research-page-content");

    const interestsContainer = document.createElement("div");
    interestsContainer.classList.add("interests-container");

    const interestsHeader = document.createElement("h2");
    interestsHeader.classList.add("interests-header");
    interestsHeader.textContent = content.interests.title;

    const interestsText = document.createElement("div");
    interestsText.classList.add("interests-text");

    for (const t of content.interests.content) {
        const p = document.createElement("p");
        p.textContent = t;
        interestsText.append(p);
    }

    interestsContainer.append(interestsHeader, interestsText);

    const groupsContainer = document.createElement("div");
    groupsContainer.classList.add("groups-container");

    const groupsHeader = document.createElement("h2");
    groupsHeader.classList.add("groups-header");
    groupsHeader.textContent = content.researchGroups.title;

    const groupsCards = document.createElement("div");
    groupsCards.classList.add("groups-cards");

    for (const group of content.researchGroups.content) {
        const card = document.createElement("div");
        card.classList.add("research-card");

        const cardHeader = document.createElement("h3");
        cardHeader.classList.add("research-card-header");
        cardHeader.textContent = group.title;

        const dateRange = document.createElement("p");
        dateRange.classList.add("research-dates");
        dateRange.textContent = `${group.startDate} – ${group.endDate}`;

        const descList = document.createElement("ul");
        descList.classList.add("research-desc");
        for (const d of group.description) {
            const li = document.createElement("li");
            li.textContent = d;
            descList.append(li);
        }

        const contact = document.createElement("p");
        contact.classList.add("research-contact");
        contact.innerHTML = `<span class="research-label">Contact:</span> ${group.contact}`;

        card.append(cardHeader, dateRange, descList, contact);
        groupsCards.append(card);
    }

    groupsContainer.append(groupsHeader, groupsCards);

    pageContent.append(interestsContainer, groupsContainer);
    page.append(nav, pageContent);

    return page;
}

export { Research };
