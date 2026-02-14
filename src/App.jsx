import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SocialLinks from './components/SocialLinks/SocialLinks';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
    const activeSection = useScrollSpy([
        'home',
        'about',
        'projects',
        'skills',
        'education',
        'contact'
    ]);

    return (
        <div className="App">
            <Navbar activeSection={activeSection} />
            <SocialLinks />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
