import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Research } from './pages/research/research';
import { Teaching } from './pages/teaching/teaching';
import "./styles/style.css";
import type { PageChangeFunction } from './types/types';

let activePage: HTMLDivElement | null = null;

const pageMap = new Map<string, (pageChangeFunction: PageChangeFunction) => HTMLDivElement>();

pageMap.set("home", Home);
pageMap.set("about", About);
pageMap.set("teaching", Teaching);
pageMap.set("research", Research);

const app = document.getElementById("app") as HTMLDivElement;

function goToPage(selectedPage: string) {
    if (activePage != null) {
        activePage.remove();
        activePage = null;
    }

    if (!pageMap.has(selectedPage.toLowerCase())) {
        console.log(`${selectedPage} is not registered!`);
        return;
    }

    activePage = pageMap.get(selectedPage.toLowerCase())!(goToPage);
    app.append(activePage);
    document.documentElement.setAttribute("data-theme", selectedPage.toLowerCase());

}

goToPage("home");

