import React, { useState } from 'react';
import { Skill } from '../objects/Skills';

interface ProjectDisplayProps {
  title: string;
  description: string;
  link: string;
  videoLink: string;
  skills: Skill[];
  video: Boolean;
  github: string;
  language: String;
  onClose: () => void;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ title, description, link, videoLink, skills, video, github,language, onClose }) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center transform scale-110 transition-transform h-auto md:h-2/3 lg:w-2/3 xl:w-1/2 overflow-y-auto">
        <h3 className="xl:text-7xl text-2xl text-black font-bold mb-2">{title}</h3>
        <div className='text-black text-lg text-left w-full items-start justify-start m-4 sm:m-10'>{description}</div>
        <div className="flex flex-wrap justify-center mb-4 sm:mb-8">
          {skills.map((skill) => (
            <div key={skill.id} className={`rounded-full px-4 py-2 text-center mr-2 mb-2 ${skill.color} ${skill.secondColor}`}>
              {skill.name}
            </div>
          ))}
        </div>
        <div className='flex justify-center sm:justify-start'>
          <a href={github} target="_blank" rel="noreferrer" className="flex items-center text-black mr-4">
            <img src='github.png' alt='Github link' className="h-6 w-6 mr-1" />
            <span>{language==='en'?<p>View Project</p>:<p>Voir Projet</p>}</span>
          </a>
          {video ?
            <a href={videoLink} target="_blank" rel="noreferrer" className="flex items-center text-black">
              <img src='youtube.png' alt='Youtube link' className="mr-1" style={{ width: '1.5rem', height: '1.5rem' }}/>
              <span>{language==='en'?<p>View Video</p>: <p>Voir Video</p>}</span>
            </a> :
            link !== "" ?
              <a href={link} target="_blank" rel="noreferrer" className="flex items-center text-black">
                <img src='www.png' alt='Link' className="mr-1" style={{ width: '1.5rem', height: '1.5rem' }} />
                <span>{language==='en'?<p>View Website</p>:<p>Voir site Web</p>}</span>
              </a>
              : <></>
          }
        </div>
      </div>
    </div>
  );
};

interface ProjectThumbnailProps {
  title: string;
  description: string;
  link: string;
  videoLink: string;
  video: Boolean;
  skills: Skill[];
  logo: string;
  github: string;
  language: String;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, github, description, videoLink, link, video, skills, logo, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`bg-gray-100 rounded-lg p-6 shadow-md mb-4 flex flex-col items-center justify-center sm:h-64 md:h-auto lg:w-110 lg:h-64 relative transition-all ${isOpen ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'hover:scale-110 hover:cursor-pointer'}`} onClick={handleClick} style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h3 className="text-xl font-bold mb-2 sm:absolute sm:top-0 sm:right-0 sm:p-4">{title}</h3>
        <div className='flex flex-wrap justify-center mb-4 sm:mb-8'>
          {skills.map((skill) => (
            <div key={skill.id} className={`rounded-full px-4 py-2 text-center m-2 ${skill.color} ${skill.secondColor}`}>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      {isOpen && <ProjectDisplay title={title} description={description} link={link} skills={skills} github={github} videoLink={videoLink} video={video} language={language} onClose={handleClose} />}
    </>
  );
};

export default ProjectThumbnail;
