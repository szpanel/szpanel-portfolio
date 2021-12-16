type projectAbbreviationList = 'photovoltaic' | 'bsc' | 'taxi' | 'noteblock';

export default interface ITranslation {
    languages: {
        'pl-PL': string,
        'en': string,
    }
    header: {
        aboutMe: string,
        employment: string,
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
    employment: {
        caption: string,
        employedUntilNow: string,
    },
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
    projectList: {
        [key in projectAbbreviationList]: {
            title: string,
            description: string,
        }
    },
}
