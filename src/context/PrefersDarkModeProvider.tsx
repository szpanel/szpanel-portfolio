import {useEffect, useState} from "react";
import {Contexts} from "./contexts";

const PREFERS_DARK_MODE_STORAGE_KEY = 'prefersDarkMode';

const PrefersDarkModeProvider = ({children}: { children: any }) => {
    const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(false);

    const isLate = () => {
        const hours = new Date().getHours();
        return hours >= 21 || (hours >= 0 && hours <= 7)
    };

    const getModeFromStorage = (): boolean | undefined => {
        const item = localStorage.getItem(PREFERS_DARK_MODE_STORAGE_KEY);
        if (item) {
            if (item === '0') {
                return false;
            } else if (item === '1') {
                return true;
            }
        }
    }

    useEffect(() => {
        const storageMode = getModeFromStorage();
        if (storageMode !== undefined) {
            setPrefersDarkMode(storageMode);
        } else {
            setPrefersDarkMode(isLate());
        }
    }, []);

    const updatePrefersDarkMode = (): void => {
        localStorage.setItem(PREFERS_DARK_MODE_STORAGE_KEY, !prefersDarkMode ? '1' : '0');
        setPrefersDarkMode(prev => !prev);
    }

    return <Contexts.PrefersDarkModeContext.Provider value={{prefersDarkMode, updatePrefersDarkMode}}>
        {children}
    </Contexts.PrefersDarkModeContext.Provider>
};

export default PrefersDarkModeProvider;