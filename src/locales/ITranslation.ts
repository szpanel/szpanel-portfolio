type projectAbbreviationList = 'photovoltaic' | 'bsc' | 'taxi' | 'noteblock';

type EmploymentHistoryDate = {
    year: number;
    month: number;
    day: number;
}

export type EmploymentHistory = {
    companyName: string | null;
    projectName: string;
    position: string;
    from: EmploymentHistoryDate;
    to: EmploymentHistoryDate | null;
    iconPath: string;
    source: string;
}

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
        history: EmploymentHistory[],
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
        testingInfo: string;
        testResponseMessage: string;
        emailSuccessfullySent: string,
        errorSendingEmail: string,
        formTemporaryDisabled?: string,
        sendBtn: string,
        sendingBtn: string,
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
    footer: {
        version: string,
        allRightsReserved: string,
    },
}
