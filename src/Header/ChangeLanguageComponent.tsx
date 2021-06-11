import {MenuItem, Select} from "@material-ui/core";
import i18n from "../locales/i18n";
import {useState} from "react";

const ChangeLanguageComponent = () => {

    const languages: string[] = i18n.t('languages', {returnObjects: true});

    const getDetectedLanguageOrDefault = (language: string) => {
        return language in languages ? language : 'en';
    }

    const detectedLanguage: string = i18n.language;
    const [language, setLanguage] = useState<string>(getDetectedLanguageOrDefault(detectedLanguage));

    const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
        const {target: {value}} = event;
        i18n.changeLanguage(value as string, (err) => {
            if (!err) {
                setLanguage(value as string);
            }
        });
    }

    return <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={handleChangeLanguage}>
        {Object.entries(languages).map(([key, value]) =>
            <MenuItem key={key} value={key}>{value}</MenuItem>
        )}
    </Select>
};

export default ChangeLanguageComponent;
