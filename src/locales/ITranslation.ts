export default interface ITranslation {
    languages: {
        'pl-PL': string,
        'en': string,
    }
    header: {
        aboutMe: string,
        projects: string,
        contact: string,
    }
    aboutMe: {
        caption: string,
        quote: string,
        description: string,
        downloadCv: string,
        latestUpdate: string,
    }
    skills: string,
    projects: {
        caption: string,
        allProjects: string,
    }
    contactForm: {
        caption: string,
        introduceYourself: string,
        topic: string,
        contactEmail: string,
        content: string,
        formTemporaryDisabled?: string,
        sendBtn: string,
        topics: {
            NONE: string,
            ORDER: string,
            QUESTION: string,
            OTHER: string,
        },
        validation: {
            introduceYourself: string,
            topic: string,
            emptyEmail: string,
            invalidEmail: string,
            content: string,
        }
    }
}
