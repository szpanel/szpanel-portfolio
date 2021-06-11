import React from "react";

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
}
