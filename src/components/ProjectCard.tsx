'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 bg-neutral-800 border border-neutral-700 rounded-xl shadow-lg p-6 hover:shadow-xl min-h-[34rem] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-video bg-gradient-to-br from-secondary to-sky-400 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full rounded-lg bg-white border-2 border-white"
            />
          ) : (
            <span className="text-white text-4xl font-bold opacity-80">
              {project.name.charAt(0)}
            </span>
          )}
        </div>
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 text-white px-4 py-2 rounded-lg font-medium border border-neutral-700 hover:bg-neutral-800 transition-colors duration-300"
            >
              View Project
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-colors duration-300"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="techskills"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 