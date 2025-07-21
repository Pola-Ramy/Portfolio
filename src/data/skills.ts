export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: '🌐', category: 'frontend' },
  { name: 'CSS3', icon: '🎨', category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'React.js', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎯', category: 'frontend' },
  { name: 'BootStrap CSS', icon: '🅱️', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚂', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'SQL', icon: '💾', category: 'database' },
  
  // Tools
  { name: 'Git', icon: '📚', category: 'tools' },
  { name: 'GitHub', icon: '🐙', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
  { name: 'AWS', icon: '☁️', category: 'tools' },
  { name: 'Vercel', icon: '▲', category: 'tools' },
  { name: 'Figma', icon: '🎨', category: 'tools' },
  { name: 'Postman', icon: '📮', category: 'tools' },
  
  // Other
  { name: 'REST APIs', icon: '🔗', category: 'other' },
]; 