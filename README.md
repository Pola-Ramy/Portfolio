
# POLA Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing projects, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO**: Basic meta tags for title and description
- **Accessible**: Follows web accessibility guidelines
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 🎨 Design System

- **Primary Color**: `neutral-800` (#262626)
- **Secondary Color**: `sky-500/60` (rgba(14, 165, 233, 0.6))
- **Font**: Inter (sans-serif)
- **Animations**: Fade-in, slide-up, and scale-in for interactive elements

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   └── about/             # About page
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── ProjectCard.tsx   # Project card component
├── data/                  # Static data files
│   ├── projects.ts       # Project data
│   └── skills.ts         # Skills data
└── styles/               # Global styles
    └── globals.css       # Tailwind CSS and custom styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Adding Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    name: "Your Project Name",
    description: "Project description...",
    image: "/images/project1.jpg",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://your-project.com",
    github: "https://github.com/your-username/project"
  },
  // ... more projects
];
```

### Adding Skills

Edit `src/data/skills.ts` to add or modify skills:

```typescript
export const skills: Skill[] = [
  {
    name: 'Your Skill',
    icon: '🎯',
    category: 'frontend' // 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  },
  // ... more skills
];
```

### Updating Personal Information

- **Name/Logo**: Update the `<POLA/>` references throughout the components
- **Contact Information**: Update email addresses and social media links in `Footer.tsx`
- **Bio**: Modify the about section text in `src/app/about/page.tsx`
- **CV**: Add your CV file to the `public` folder and ensure the link in `Footer.tsx` points to it (default: `/POLA-CV.pdf`)

## 🎯 Pages

### Home Page (`/`)
- Hero section with introduction
- About preview with statistics
- Call-to-action section

### Projects Page (`/projects`)
- Grid layout of project cards
- Each card shows project image, name, description, and technologies
- Hover animations and interactive elements

### About Page (`/about`)
- Personal bio and information
- Skills organized by category
- Contact and social links are in the Footer

> **Note:** There is currently no dedicated "Experience and Achievements" section or separate "Contact" page. All contact/social features are in the Footer.

## 🎨 Components

### Navbar
- Sticky navigation with logo
- Responsive mobile menu
- Active page highlighting
- Smooth scroll behavior

### Footer
- Social media links (Facebook, Instagram, LinkedIn, Email)
- WhatsApp project inquiry button
- CV download button (ensure your CV is in `public/` as `POLA-CV.pdf`)
- Contact information

### ProjectCard
- Hover animations
- Technology tags
- Project links (live demo and GitHub)
- Responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

- **Fade In**: Page load animations
- **Slide Up**: Project cards entrance
- **Scale In**: Button hover effects
- **Hover Effects**: Interactive elements

## 🔧 Configuration Files

- `tailwind.config.js`: Tailwind CSS configuration with custom colors and animations
- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `postcss.config.js`: PostCSS configuration for Tailwind

## 📄 License

> **Note:** No LICENSE file is present. If you want to open-source your project, add a LICENSE file (MIT recommended).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out:
- Email: polaramy2004@gmail.com
- LinkedIn: [POLA](https://linkedin.com/in/pola-ramy-)
- Or use the social/contact links in the website footer.

---

Built with ❤️ using Next.js and Tailwind CSS
