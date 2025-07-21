export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
 {
    id: 1,
    name: "Product Management System",
    description: "Built a browser-based CRUD product management system using pure JavaScript for dynamic DOM manipulation and user interaction. Allowing users to manage a list of products with full form validation and real-time updates.",
    image: "/images/product-management-system.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://pola-ramy.github.io/cruds/CrudsProject/index",
    github: "https://github.com/Pola-Ramy/cruds/tree/main/CrudsProject"
  },
 {
    id: 2,
    name: " E-Commerce IPhone Store",
    description: "Built a responsive single-page e-commerce app for iPhones using ReactJS, featuring dynamic routing, global state management with Context API, and reusable Bootstrap-styled components. Integrated external JSON API for product data and optimized state handling with hooks.",
    image: "/images/Iphone-Store.png",
    technologies: ["ReactJS", "React Hooks", "JavaScript","Context API","React Router" , "Bootstrap" , "JSON API"],
    link: "https://e-commerce-i-phone-store.vercel.app",
    github: "https://github.com/Pola-Ramy/E-Commerce-IPhone-Store"
  },
   {
    id: 3,
    name: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/images/Portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://portfolio-demo.com",
    github: "https://github.com/pola/portfolio"
  },

]; 