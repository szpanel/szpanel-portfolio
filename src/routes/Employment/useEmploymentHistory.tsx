import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {EmploymentHistory} from "../../locales/ITranslation";

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

    const employmentHistory: EmploymentHistory[] = useMemo(() =>
            t('employment.history', {returnObjects: true})
        , [t]);

    return employmentHistory.map((entry) => ({
        ...entry,
        from: new Date(entry.from.year, entry.from.month - 1, entry.from.day),
        to: entry.to ? new Date(entry.to.year, entry.to.month - 1, entry.to.day) : new Date(),
    }));
}
