import ITranslation from "../ITranslation";

const en: ITranslation = {
    languages: {
        'pl-PL': "Polish",
        'en': "English"
    },
    header: {aboutMe: "About Me", contact: "Contact", projects: "Projects"},
    aboutMe: {
        caption: "Łukasz Szpanelewski",
        description: "Dzień dobry 👋\n" +
            "Swoją prawidzwą przygodę z programowaniem rozpocząłem pod koniec 2017 roku wraz z rozpoczęciem studiów. Pierwszymi poznanymi przeze mnie językami programowania były: C++, HTML/CSS/JS. W trakcie studiów wybrałem specjalizację Systemy i Aplikacje Mobilne, gdzie zacząłem rozwijać się w kierunku Javy. Język ten spodobał mi się do tego stopnia, że do niedawna tj. do javy 15, musiałem wiedzieć o wszystkich wdrożonych nowościach. Po drodze poznałem wiele interesujących mnie technologii i frameworków. Zawsze podobała mi się prostota pisania kodu w JS, a jednocześnie frustrował mnie fakt, że jest to język typowany dynamicznie. Moje podejście do tego języka zmieniło się w momencie, w którym poznałem technologię jaką jest Typescript. Środowisko te sprawia, że świetnie odnajduję się jako programista JS czy Node.js i aktualnie rozwijam się w tym kierunu.",
        downloadCv: "Download my CV",
        latestUpdate: "Last updated CV {{date}}",
        quote: "The best way to predict the future is to create it."
    },
    skills: "Skills",
    projects: {allProjects: "All", caption: "Projects"},
    contactForm: {
        caption: "Contact form",
        contactEmail: "Contact email",
        content: "Contects",
        introduceYourself: "Introduce yourself",
        sendBtn: "Send",
        topic: "Topic",
        formTemporaryDisabled: "Contact form temporarily disabled. Contact me directly via email:",
        topics: {
            NONE: "Choose a topic",
            ORDER: "Order",
            QUESTION: "Question",
            OTHER: "Other",
        },
        validation: {
            introduceYourself: "At least leave a nickname",
            topic: "What are we talking about?",
            emptyEmail: "Give me the opportunity to answer you in some way",
            invalidEmail: "Invalid email",
            content: "Haven't you forgotten something? :)"
        }
    },
}

export default en;
