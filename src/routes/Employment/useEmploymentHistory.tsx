import {useTranslation} from "react-i18next";

export interface IEmploymentHistory {
    companyName: string | null;
    projectName: string;
    position: string;
    from: Date;
    to: Date;
    iconPath: string | null;
    source: string;
}

export const useEmploymentHistory = (): IEmploymentHistory[] => {
    const {t} = useTranslation();

    return [

    ];
}
