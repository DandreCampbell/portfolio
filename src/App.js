import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Timeline from "./components/timeline/Timeline";
import Projects from './components/projects/Projects';

export default function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Timeline />
      <Projects />
    </div>
  );
};
