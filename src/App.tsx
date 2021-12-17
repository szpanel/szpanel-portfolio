import React, {useContext, useRef} from 'react';
import './App.css';
import Header, {ValueOfMenu} from "./Header/Header";
import Footer from "./Footer";
import Contact from "./routes/Contact";
import Employment from "./routes/Employment/Employment";
import Projects from "./routes/Projects/Projects";
import About from "./routes/About/About";
import 'animate.css';
import {
    Container,
    createTheme,
    CssBaseline,
    MuiThemeProvider,
    responsiveFontSizes
} from "@material-ui/core";
import {grey, yellow} from "@material-ui/core/colors";
import styles from "./styles/_main.module.scss";
import {Contexts} from "./context/contexts";
import IsMobileViewProvider from "./context/IsMobileViewProvider";
import {useMenuItems} from "./Header/useMenuItems";


function App() {
    const {prefersDarkMode, updatePrefersDarkMode} = useContext(Contexts.PrefersDarkModeContext);

    const menuItems = useMenuItems();

    const defaultTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        main: prefersDarkMode ? yellow[500] : "#3f51b5",
                    },
                    secondary: {
                        main: prefersDarkMode ? "#393939" : grey[100],
                    }
                },
                typography: {
                    fontFamily: `"Open Sans", sans-serif`,
                }
            }),
        [prefersDarkMode],
    );

    const theme = responsiveFontSizes(defaultTheme);

    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const employmentRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const setSelectedMenu = (selectedMenu: ValueOfMenu) => {
        let ref = aboutRef.current;
        switch (selectedMenu) {
            case menuItems.About:
                ref = aboutRef.current;
                break;
            case menuItems.Employment:
                ref = employmentRef.current
                break;
            case menuItems.Projects:
                ref = projectsRef.current;
                break;
            case menuItems.Contact:
                ref = contactRef.current;
                break;
        }
        ref?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <MuiThemeProvider theme={theme}>
            <IsMobileViewProvider>
                <CssBaseline/>
                <Header handleMenuClick={setSelectedMenu}
                        handleThemeChange={updatePrefersDarkMode}
                />
                <Container className={styles.content}>
                    <div ref={aboutRef}><About/></div>
                    <div ref={employmentRef}><Employment/></div>
                    <div ref={projectsRef}><Projects/></div>
                    <div ref={contactRef}><Contact/></div>
                </Container>
                <Footer/>
            </IsMobileViewProvider>
        </MuiThemeProvider>
    );
}

export default App;
