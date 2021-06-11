import ITranslation from "../ITranslation";

const pl: ITranslation = {
    languages: {
        'pl-PL': "Polski",
        'en': "Angielski"
    },
    header: {aboutMe: "O mnie", contact: "Kontakt", projects: "Projekty"},
    aboutMe: {
        caption: "Łukasz Szpanelewski",
        description: "Dzień dobry 👋\n" +
            "Swoją prawidzwą przygodę z programowaniem rozpocząłem pod koniec 2017 roku wraz z rozpoczęciem studiów. Pierwszymi poznanymi przeze mnie językami programowania były: C++, HTML/CSS/JS. W trakcie studiów wybrałem specjalizację Systemy i Aplikacje Mobilne, gdzie zacząłem rozwijać się w kierunku Javy. Język ten spodobał mi się do tego stopnia, że do niedawna tj. do javy 15, musiałem wiedzieć o wszystkich wdrożonych nowościach. Po drodze poznałem wiele interesujących mnie technologii i frameworków. Zawsze podobała mi się prostota pisania kodu w JS, a jednocześnie frustrował mnie fakt, że jest to język typowany dynamicznie. Moje podejście do tego języka zmieniło się w momencie, w którym poznałem technologię jaką jest Typescript. Środowisko te sprawia, że świetnie odnajduję się jako programista JS czy Node.js i aktualnie rozwijam się w tym kierunu.",
        downloadCv: "Pobierz moje CV",
        latestUpdate: "Ostatnia aktualizacja CV {{date}}",
        quote: "The best way to predict the future is to create it."
    },
    skills: "Umiejętności",
    projects: {allProjects: "Wszystkie", caption: "Projekty"},
    contactForm: {
        caption: "Formularz kontaktowy",
        contactEmail: "Email kontaktowy",
        content: "Treść",
        introduceYourself: "Przedstaw się",
        sendBtn: "Wyślij",
        topic: "Temat",
        formTemporaryDisabled: "Formularz kontaktowy tymczasowo wyłączony. Skontaktuj się ze mną bezpośrednio poprzez email:",
        topics: {
            NONE: "Wybierz temat",
            ORDER: "Zlecenie",
            QUESTION: "Pytanie",
            OTHER: "Inny",
        },
        validation: {
            introduceYourself: "Zostaw po sobie chociaż nick",
            topic: "O czym rozmawiamy?",
            emptyEmail: "Daj mi możliwość odpowiedzenia Ci w jakiś sposób",
            invalidEmail: "Nieprawidłowy email",
            content: "Nie zapomniałeś/aś o czymś? :)"
        }
    },
}

export default pl;
