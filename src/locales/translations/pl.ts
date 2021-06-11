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
    projectList: {
        'photovoltaic': {
            title: "System przepływu informacji w firmie fotowoltaicznej",
            description: "Aplikacja internetowa ułatwiająca współpracę pracowników firmy fotowoltaicznej. " +
                "Backend został zaimplementowany przy użyciu frameworka Spring oraz nierelacyjnej bazy danych MongoDB. " +
                "Korzysta ona z usługi AWS S3.",
        },
        'bsc': {
            title: "System dla gabinetu stomatologicznego",
            description: "Projekt składa się z dwóch aplikacji. Internetowej, przeznaczonej dla gabinetu " +
                "stomatologicznego, która poprawia ergonomię jego pracy oraz mobilnej stworzonej z myślą o jego pacjentach. " +
                "Frontend aplikacji został zaimplementowany w JS przy użyciu React. Aplikacja mobilna natomaist" +
                " wykorzystuje potencjał Androida przy użyciu Kotlina. Obie aplikacje komunikują się ze sobą za" +
                " pośrednictwem Firebase. Projekt ten jest owocem mojej pracy inżynierskiej."
        },
        'taxi': {
            title: "Artrans",
            description: "Proste portfolio dla taksówkarza wykorzystujące podstawowe technologie HTML/CSS/JS z wykorzystaniem" +
                " jQuery i bootstrapa. Jeden z moich pierwszych projektów.",
        },
        'noteblock': {
            title: "NoteBlock",
            description: "Jako programista w sieci NoteBlock zajmowałem się implementacją i rozwijaniem modułu gildijnego" +
                " dla serwera Minecraft z wykorzystaniem SpigotAPI w Javie. Zrealizowałem bardzo dużo prostych wtyczek do gry " +
                "minecraft, które rozwinęły moje abstrakcyjne podejście do programowania umożliwijając mi przy tym świetną zabawę. " +
                "Niejednokrotnie wtyczki te komunikowały się z komunikatorem Discord.",
        },
    },
}

export default pl;
