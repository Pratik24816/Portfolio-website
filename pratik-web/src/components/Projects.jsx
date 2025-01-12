import React from "react";
import { PROJECTS } from "../constants";
import { FaReact, FaNode, FaJs, FaDatabase } from "react-icons/fa"; 

const Projects = () => {

  const renderTechnologyIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact className="text-3xl" />;
      case "Node":
        return <FaNode className="text-3xl" />;
      case "JavaScript":
        return <FaJs className="text-3xl" />;
      case "MongoDB":
        return <FaDatabase className="text-3xl" />;
      default:
        return <span className="text-xl">{tech}</span>;
    }
  };

  return (
    <div className="py-12">
      {/* Title*/}
      <div className="flex justify-center items-center py-6">
        <h1 className="bg-gradient-to-l from-blue-900 to-blue-300 bg-clip-text text-4xl font-bold text-center mb-8 text-transparent">
          Projects
        </h1>
      </div>

      {/* Projects*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="relative">
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded transition-all duration-300 ease-in-out group-hover:blur-sm"
                height="250"
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-stone-900 p-4 text-sm font-medium text-stone-300 flex justify-center items-center"
                    >
                      {renderTechnologyIcon(tech)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
            <p className="mb-4 text-stone-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
