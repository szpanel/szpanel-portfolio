import ITranslation from "../ITranslation";

const en: ITranslation = {
    languages: {
        'pl-PL': "Polish",
        'en': "English"
    },
    header: {aboutMe: "About Me", contact: "Contact", projects: "Projects", employment: "Employment"},
    aboutMe: {
        caption: "Łukasz Szpanelewski",
        description: "Hello 👋 I started my real adventure with programming at the end of 2017 when I started my studies. The first programming languages I learned were: C ++, HTML / CSS / JS. During my studies, I chose the Mobile Systems and Applications specialization, where I started to develop towards Java. I liked this language so much that until recently, i.e. until Java 15, I had to know about all the implemented novelties. Along the way, I got to know many technologies and frameworks that interest me. I have always liked the simplicity of writing JS code, and at the same time frustrated me that it is a dynamically typed language. My approach to this language changed when I got to know Typescript technology. This environment makes me a great JS or Node.js programmer and I am currently developing in this direction.",
        downloadCv: "Download my CV",
        latestUpdate: "Last updated CV {{date}}",
        quote: "The best way to predict the future is to create it."
    },
    skills: "Skills",
    employment: {
        caption: "Employment history",
        employedUntilNow: "Present",
    },
    projects: {allProjects: "All", caption: "Projects"},
    contactForm: {
        caption: "Contact form",
        contactEmail: "Contact email",
        content: "Contects",
        testingInfo: "If you just want to test, select me 🧪",
        testResponseMessage: "The message was not sent. It's just a test 🥸",
        introduceYourself: "Introduce yourself",
        sendBtn: "Send",
        sendingBtn: "Sending...",
        topic: "Topic",
        emailSuccessfullySent: "Message have been sent 🤠",
        errorSendingEmail: "An error ocurred while sending a message 😞",
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
    footer: {
        version: "Version",
        allRightsReserved: "All rights reserved",
    },
}

export default en;
