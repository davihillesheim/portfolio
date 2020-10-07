import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
