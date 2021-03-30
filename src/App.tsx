import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Project from "./routes/Project";
import Content from './Content';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./themes";


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Header/>
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
