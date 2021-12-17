import {useTranslation} from "react-i18next";
import {Menu} from "./Header";


export const useMenuItems = (): Menu => {
    const {t} = useTranslation();
    return {
        About: t('header.aboutMe'),
        Employment: t('header.employment'),
        Projects: t('header.projects'),
        Contact: t('header.contact'),
    }
}
