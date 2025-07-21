import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      {/* Header Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold  mb-6">
            My <span className="text-secondary">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and solution, showcasing my skills in various technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto border-2 border-white rounded-lg animated-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
} 