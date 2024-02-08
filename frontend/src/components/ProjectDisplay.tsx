import React, { useState } from 'react';

interface ProjectDisplayProps {
  title: string;
  description: string;
  link: string;
  onClose: () => void;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ title, description, link, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center justify-center transform scale-110 transition-transform h-2/3 w-1/2">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
        <a href={link} className="text-blue-500 hover:underline mt-4" target="_blank" rel="noopener noreferrer">
          {link}
        </a>
        <button className="text-red-500 mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

interface ProjectThumbnailProps {
  title: string;
  description: string;
  link: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`bg-gray-100 rounded-lg p-6 shadow-md mb-4 flex flex-col items-center justify-center h-48 lg:w-110 lg:h-64 transition-all ${isOpen ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'hover:scale-110 hover:cursor-pointer'}`} onClick={handleClick}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
      {isOpen && <ProjectDisplay title={title} description={description} link={link} onClose={handleClose} />}
    </>
  );
};

export default ProjectThumbnail;
