interface Image {
    image: string,
    alt: string,
}

interface Text {
    title: string,
    content: string[],
}

interface InteractiveCard {
    title: string,
    preview: string,
    content: string[],
}

interface Section<T> {
    title: string,
    content: T,
}

type PageChangeFunction = (activePage: string) => void;

export { type Image, type Text, type Section, type InteractiveCard, type PageChangeFunction };
