import {useEffect, useState} from "react";
import {Contexts} from "./contexts";

const PREFERS_COLOR_SCHEME_DARK_QUERY = '(prefers-color-scheme: dark)';

const PrefersDarkModeProvider = ({children}: { children: any }) => {
    const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(false);

    const appearanceChangeListener = () => {
        window.matchMedia(PREFERS_COLOR_SCHEME_DARK_QUERY).addEventListener('change', event => {
            setPrefersDarkMode(event.matches);
        });
    }

    useEffect(() => {
        setPrefersDarkMode(window.matchMedia(PREFERS_COLOR_SCHEME_DARK_QUERY).matches);
        appearanceChangeListener();
    }, []);

    const updatePrefersDarkMode = (): void => {
        setPrefersDarkMode(prev => !prev);
    }

    return (
        <Contexts.PrefersDarkModeContext.Provider value={{prefersDarkMode, updatePrefersDarkMode}}>
            {children}
        </Contexts.PrefersDarkModeContext.Provider>
    );
};

export default PrefersDarkModeProvider;
