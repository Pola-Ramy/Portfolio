import { skills } from '@/data/skills';

export default function About() {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other'),
  };

  return (
    <div className="min-h-screen bg-gray-800 dark:bg-gray-800">
      {/* Header Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                About <span className="text-secondary">Me</span>
              </h1>
              <div className="text-2xl font-bold text-whaite">
                &lt;POLA/&gt;
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer with experience 
                creating innovative web solutions. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in writing clean, maintainable code 
                and staying up-to-date with the latest industry trends.
              </p>
            </div>
            <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary to-sky-400 rounded-2xl flex items-center justify-center">
                <div className="text-white font-bold opacity-80 text-center flex flex-col justify-center items-center">
                  <span className='text-6xl m-2'>Hello,World</span>
                  <span className="text-5xl m-2">I'm POLA</span>
                  <span className="text-4xl ml-12">Full Stack Developer <span role="img" aria-label="waving hand">👋</span></span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Skills & <span className="text-secondary">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400">
              Here are the technologies and tools I work with
            </p>
          </div>

          {/* Match Projects Grid Container Style */}
          <div className="border-2 border-white rounded-lg animated-border p-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {/* Frontend Skills */}
              <div className="card">
                <h3 className="text-xl font-semibold  mb-4 flex items-center">
                  <span className="mr-2">🎨</span>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="techskills"
                    >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="card">
                <h3 className="text-xl font-semibold  mb-4 flex items-center">
                  <span className="mr-2">⚙️</span>
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="techskills"
                    >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database Skills */}
              <div className="card">
                <h3 className="text-xl font-semibold  mb-4 flex items-center">
                  <span className="mr-2">🗄️</span>
                  Database
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.database.map((skill, index) => (
                    <span
                      key={index}
                      className="techskills"
                    >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">🛠️</span>
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="techskills"
                      >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">🔧</span>
                  Other
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.other.map((skill, index) => (
                    <span
                      key={index}
                      className="techskills"
                      >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 