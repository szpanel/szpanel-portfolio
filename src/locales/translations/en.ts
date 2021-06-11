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
    projectList: {
        'photovoltaic': {
            title: "Information flow system in a photovoltaic company",
            description: "A web application that facilitates the cooperation of employees of a photovoltaic company." +
                " The backend was implemented using the Spring framework and the MongoDB" +
                " non-relational database. It uses the AWS S3 service as well.",
        },
        'bsc': {
            title: "A system for a dentist's office",
            description: "The project consists of two applications. web, intended for a dentist's office, which " +
                "improves the ergonomics of its work, and a mobile designed with its patients in mind. " +
                "The frontend of the application has been implemented in JS using React while mobile application " +
                "uses the potential of Android using Kotlin. Both applications communicate with each other via Firebase. " +
                "This project is the result of my engineering work."
        },
        'taxi': {
            title: "Artrans",
            description: "A simple portfolio for a taxi driver using basic HTML/CSS/JS " +
                "technologies with the use of jQuery and bootstrap. One of my first projects.",
        },
        'noteblock': {
            title: "NoteBlock",
            description: "As a programmer in the NoteBlock network, I was involved in the implementation and " +
                "development of a guild module for Minecraft server using SpigotAPI in Java. I made a lot of " +
                "simple minecraft plugins that developed my abstract approach to programming, allowing me to " +
                "have a lot of fun. These plugins often communicated with the Discord.",
        },
    },
}

export default en;
