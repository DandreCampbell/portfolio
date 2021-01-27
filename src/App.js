import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>               
    </Router>
  );
};
