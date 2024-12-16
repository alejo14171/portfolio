import React from 'react';
import Header from './components/Header';
import About from './components/About/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';

function App() {
  const sections = ['about', 'projects', 'contact'];

  return (
    <div className="bg-white">
      <Header />
      <About />
      <Projects />
      <Contact />
      <ScrollButton sections={sections} />
    </div>
  );
}

export default App;