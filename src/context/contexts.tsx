import React from "react";
import {isMobileView} from "../common/common";

export namespace Contexts {
    export interface IPrefersDarkMode {
        prefersDarkMode: boolean,
        updatePrefersDarkMode: () => void;
    }

    const defaultValues: IPrefersDarkMode = {
        prefersDarkMode: false,
        updatePrefersDarkMode(): void {
        }
    }
    export const PrefersDarkModeContext = React.createContext(defaultValues);

    export const IsMobileViewContext = React.createContext(isMobileView());
}
