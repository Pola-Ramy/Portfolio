import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-primary dark:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-sky-400/10 dark:from-secondary/20 dark:to-gray-800/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-secondary bg-gradient-to-r from-secondary to-sky-400 dark:from-secondary dark:to-sky-600 bg-clip-text text-transparent">
                POLA
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer who loves creating innovative web solutions 
              with modern technologies and clean, maintainable code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects" className="btn-primary text-lg px-8 py-4">
                View My Work
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white">
                Turning Ideas Into{' '}
                <span className="text-secondary dark:text-sky-400">Digital Reality</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With  experience in web development, I specialize in building 
                scalable, user-friendly applications that solve real-world problems. From 
                concept to deployment, I ensure every project meets the highest standards 
                of quality and performance.
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
                <span className="text-white text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">▲</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 