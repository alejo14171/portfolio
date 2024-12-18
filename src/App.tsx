import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';

function App() {
  const sections = ['about', 'projects', 'contact'];

  return (
    <div className="bg-white">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <ScrollButton sections={sections} />
    </div>
  );
}

export default App;