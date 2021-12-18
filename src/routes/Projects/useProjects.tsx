import {IProject} from "./Project";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Technology} from "./ITechnology";
import {useTranslation} from "react-i18next";

export const useProjects = (): IProject[] => {
    const {t} = useTranslation();
    return [

    ];
}
