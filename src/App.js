import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <div className="app">
      <NavBar />
      <About />
      <Timeline />
      <Projects />

      <Contact />          
      <Footer />          
    </div> 
  );
};
