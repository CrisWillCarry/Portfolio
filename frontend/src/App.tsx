import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import About from './About';
import Contact from './Contact';
import './App.css';
import Skills from './SkillsDisplay';
import Reviews from './Reviews';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('intro');
      const projectSection = document.getElementById('projects');
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');
      const skillsSection = document.getElementById('skills');
      const reviewsSection = document.getElementById('reviews');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        introSection && 
        projectSection && 
        aboutSection && 
        contactSection &&
        skillsSection &&
        reviewsSection
      ) {
        if (scrollPosition < projectSection.offsetTop) {
          setActiveSection('intro');
        } else if (
          scrollPosition >= projectSection.offsetTop && 
          scrollPosition < skillsSection.offsetTop
        ) {
          setActiveSection('projects');
        } else if (
          scrollPosition >= skillsSection.offsetTop && 
          scrollPosition < aboutSection.offsetTop
        ){
          setActiveSection('skills');
        }
        else if (
          scrollPosition >= aboutSection.offsetTop && 
          scrollPosition < reviewsSection.offsetTop
        ) {
          setActiveSection('about');
        } else if (
          scrollPosition >= reviewsSection.offsetTop && 
          scrollPosition < contactSection.offsetTop
        ) {
          setActiveSection('reviews');
        }
        else {
          setActiveSection('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App min-h-screen ${activeSection}`}>
      <Navbar activeSection={activeSection} />
      <Intro />
      <ProjectSection />
      <Skills/>
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
