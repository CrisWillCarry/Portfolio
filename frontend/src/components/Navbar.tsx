import React from 'react';

const Navbar: React.FC<{ activeSection: string, changeLanguage: Function ,language: String}> = ({ activeSection, changeLanguage, language }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
      const scrollToPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`p-4 fixed top-0 w-full z-10 ${activeSection? activeSection : 'bg-slate-900'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="text-blue-700 font-bold text-5xl">{language==='en'?<p>My Portfolio</p>:<p>Mon portfolio</p>}</div>
          </div>
          
          <div className='flex'>
            <a href='https://github.com/CrisWillCarry'>
              <img src='/github.png' alt='github' className='rounded cursor-pointer' style={{ width: '7vh', height: '7vh' }} />
            </a>
            <a href='https://www.linkedin.com/in/cristian-barros-ferreira-2b5b84232/'>
              <img src='/linkedIn.png' alt='linkedin' className='rounded cursor-pointer' style={{ width: '7vh', height: '7vh' }} />
            </a>
            <select className='bg-gray-700 text-white font-mono font-bold text-lg ml-2' onChange={() => changeLanguage()}>
              <option value='en'>EN</option>
              <option value='fr'>FR</option>
            </select>
          </div>

          <ul className="flex space-x-2 sm:space-x-4">
            <li
              className={`text-white text-base sm:text-lg font-mono font-bold hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeSection === 'intro' && 'bg-gray-700'}`}
              onClick={() => scrollToSection('intro')}
            >
              {language==='en'?<p>Home</p>:<p>Accueil</p>}
            </li>
            <li
              className={`text-white text-base sm:text-lg font-mono font-bold hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeSection === 'projects' && 'bg-gray-700'}`}
              onClick={() => scrollToSection('projects')}
            >
              {language==='en'?<p>Projects</p>:<p>Projets</p>}
            </li>
            <li
              className={`text-white text-base sm:text-lg font-mono font-bold hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeSection === 'skills' && 'bg-gray-700'}`}
              onClick={() => scrollToSection('skills')}
            >
              {language==='en'?<p>Skills</p>:<p>Compétences</p>}
            </li>
            <li
              className={`text-white text-base sm:text-lg font-mono font-bold hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeSection === 'about' && 'bg-gray-700'}`}
              onClick={() => scrollToSection('about')}
            >
              {language==='en'?<p>About</p>:<p>À propos</p>}
            </li>
            <li
              className={`text-white text-base sm:text-lg font-mono font-bold hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeSection === 'reviews' && 'bg-gray-700'}`}
              onClick={() => scrollToSection('reviews')}
            >
              {language==='en'?<p>Reviews</p>:<p>Commentaires</p>}
            </li>
            <li
              className={`text-white text-base  hover:scale-110 border sm:text-lg font-mono font-bold hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${activeSection === 'contact' && 'bg-gray-700'}`}
              onClick={() => scrollToSection('contact')}
            >
              {language==='en'?<p>Contact me</p>:<p>Contactez-moi</p>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
