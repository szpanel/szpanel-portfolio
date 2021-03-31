import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Project from "./routes/Project";
import Content from './Content';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {yellow} from "@material-ui/core/colors";


function App() {
    const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(true);

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        main: prefersDarkMode ? yellow[500] : "#3f51b5",
                    },
                },

            }),
        [prefersDarkMode],
    );


    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Header handleThemeChange={() => setPrefersDarkMode(prev => !prev)}/>
                <Content>
                    <Switch>
                        <Route path="/" component={Projects} exact={true}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" exact={true} component={Projects}/>
                        <Route path="/projects/:id" component={Project}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </Content>
                <Footer/>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
