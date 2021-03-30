import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Project from "./routes/Project";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/projects" exact={true} component={Projects}/>
                <Route path="/projects/:id" component={Project}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
