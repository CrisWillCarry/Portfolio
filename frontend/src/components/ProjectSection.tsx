  import { useState, useEffect } from "react";
  import { Projects, Project } from "../objects/Project";
import ProjectDisplay from "./ProjectDisplay";

  const ProjectSection: React.FC<{language: String}> = ({language}) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
      setProjects(Projects as Project[]);
    }, []);

    return (
      <div id="projects" className=" bg-black rounded-lg p-8 shadow-md max-w-full lg:mr-40 lg:ml-48">
        <h2 className="text-6xl font-semibold text-center text-white mb-8">{language==='en'?<p>PROJECTS</p>:<p>PROJETS</p>}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            language==='en'?
            <ProjectDisplay
              key={project.id}
              title={project.title}
              description={project.description_en}
              link={project.link}
              video={project.video}
              skills={project.skills}
              logo={project.logo}
              github={project.github}
              language={language}
              videoLink={project.videoLink ? project.videoLink : ''}
            />:
            <ProjectDisplay
              key={project.id}
              title={project.title}
              description={project.description_fr}
              link={project.link}
              video={project.video}
              skills={project.skills}
              logo={project.logo}
              github={project.github}
              language={language}
              videoLink={project.videoLink ? project.videoLink : ''}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ProjectSection;
