import i18n from "i18next";
import en from "./translations/en";
import pl from "./translations/pl";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";


const resources = {
    'en': {
        translation: en
    },
    'pl-PL': {
        translation: pl
    }
};

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en"
    });

export default i18n;
