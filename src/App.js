import React, { Component } from 'react';
import Nav from './components/navbar/Nav';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
        <div className="app">
          <Nav />
          <About />
          <Timeline />
          <Projects />
          <Contact />          
          <Footer />          
        </div>        
    )
  }
}

export default App;
