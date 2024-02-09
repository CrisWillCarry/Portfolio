  import { useState, useEffect } from "react";
  import { Projects, Project } from "../objects/Project";
import ProjectDisplay from "./ProjectDisplay";

  const ProjectSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
      setProjects(Projects as Project[]);
    }, []);

    return (
      <div id="projects" className=" bg-black rounded-lg p-8 shadow-md max-w-full lg:mr-40 lg:ml-48">
        <h2 className="text-6xl font-semibold text-center text-white mb-8">PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectDisplay
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              video={project.video}
              skills={project.skills}
              logo={project.logo}
              github={project.github}
              videoLink={project.videoLink ? project.videoLink : ''}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ProjectSection;
