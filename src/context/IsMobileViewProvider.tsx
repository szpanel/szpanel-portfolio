import {Contexts} from "./contexts";
import {useEffect, useState} from "react";
import {isMobileView as windowIsMobileView} from "../common/common";

const IsMobileViewProvider = ({children}: { children: any }) => {
    const [isMobileView, setIsMobileView] = useState<boolean>(windowIsMobileView());

    useEffect(() => {
        const setResponsiveness = () => {
            setIsMobileView(windowIsMobileView());
        };
        window.addEventListener('resize', setResponsiveness);
        return () => window.removeEventListener('resize', setResponsiveness);
    }, []);


    return <Contexts.IsMobileViewContext.Provider value={isMobileView}>
        {children}
    </Contexts.IsMobileViewContext.Provider>
};

export default IsMobileViewProvider;
