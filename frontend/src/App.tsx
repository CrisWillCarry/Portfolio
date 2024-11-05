import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import Contact from './Contact';
import './App.css';
import Skills from './SkillsDisplay';
import Background from './Background';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('intro');
      const projectSection = document.getElementById('projects');
      const aboutSection = document.getElementById('background');
      const contactSection = document.getElementById('contact');
      const skillsSection = document.getElementById('skills');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        introSection && 
        projectSection && 
        aboutSection && 
        contactSection &&
        skillsSection
      ) {
        if (scrollPosition < aboutSection.offsetTop) {
          setActiveSection('intro');
        } else if (
          scrollPosition >= aboutSection.offsetTop && 
          scrollPosition < skillsSection.offsetTop
        ) {
          setActiveSection('background');
        } else if (
          scrollPosition >= skillsSection.offsetTop && 
          scrollPosition < projectSection.offsetTop
        ) {
          setActiveSection('skills');
        } else if (
          scrollPosition >= projectSection.offsetTop && 
          scrollPosition < contactSection.offsetTop
        ) {
          setActiveSection('projects');
        } else {
          setActiveSection('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function changeLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  }

  return (
    <div className={`App min-h-screen ${activeSection}`}>
      <Navbar activeSection={activeSection} changeLanguage={changeLanguage} language={language}/>
      <Intro language={language}/>
      <Background language={language} />
      <Skills language={language}/>
      <ProjectSection language={language} />
      <Contact language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default App;
