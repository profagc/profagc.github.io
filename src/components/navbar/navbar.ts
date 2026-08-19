import type { PageChangeFunction } from "../../types/types";
import "./navbar.css";

const pages = [
    "Home", 
    "About", 
    "Teaching", 
    "Research",
];


function Navbar(activePage: string, onPageClick: PageChangeFunction): HTMLDivElement {
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const currentPage = document.createElement("h1");
    currentPage.classList.add("navbar-current-page");
    currentPage.textContent = activePage;

    const pageContainer = document.createElement("div");
    pageContainer.classList.add("navbar-buttons-container");

    for (const page of pages) {
        const pageButtonContainer = document.createElement("div");
        pageButtonContainer.classList.add("navbar-button-container")
        pageButtonContainer.onclick = (ev) => { ev.preventDefault(); onPageClick(page) };
        const pageButton = document.createElement("button");
        pageButton.classList.add("navbar-button");

        if (page.toLowerCase() === activePage.toLowerCase()) {
            pageButtonContainer.classList.add("active")
            pageButton.classList.add("active");
        }
        pageButton.textContent = page;

        pageButtonContainer.append(pageButton);

        pageContainer.append(pageButtonContainer);
    }

    navbar.append(currentPage, pageContainer);

    return navbar;
}

export { Navbar };
