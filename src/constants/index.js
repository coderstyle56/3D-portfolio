// src/constants/index.js

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Web Developer", icon: "/assets/web.png" },
  { title: "Full Stack Developer", icon: "/assets/mobile.png" },
  { title: "AI Integrator", icon: "/assets/backend.png" },
  { title: "3d & Creative Developer", icon: "/assets/creator.png" },
];

export const technologies = [
  { name: "HTML 5", icon: "/assets/tech/html.png" },
  { name: "CSS 3", icon: "/assets/tech/css.png" },
  { name: "JavaScript", icon: "/assets/tech/javascript.png" },
  { name: "TypeScript", icon: "/assets/tech/typescript.png" },
  { name: "React JS", icon: "/assets/tech/reactjs.png" },
  { name: "Redux Toolkit", icon: "/assets/tech/redux.png" },
  { name: "Tailwind CSS", icon: "/assets/tech/tailwind.png" },
  { name: "Node JS", icon: "/assets/tech/nodejs.png" },
  { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
  { name: "Three JS", icon: "/assets/tech/threejs.png" },
  { name: "git", icon: "/assets/tech/git.png" },
  { name: "figma", icon: "/assets/tech/figma.png" },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "CollegeTips",
    icon: "/assets/company/collegetipslogo.png",
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Collaborated with design and product teams to build dynamic UI components using Next.js, Tailwind CSS, and Framer Motion, improving engagement on culture pages",
      "Developed and deployed a Pet-Friendly Campaign website, integrating volunteer forms and theme toggles.",
      "Ensured cross-device responsiveness and optimized loading performance across 3 live projects hosted on Vercel.",
      "Worked in a collaborative Git-based environment, practicing agile and CI/CD workflows.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ixamBee",
    icon:"/assets/company/ixambeeicon.png",
    iconBg: '#383E56',
    date: "Nov 2025 - Dec 2025",
    points: [
      "Migrated a live SEO crawler & website audit system from MongoDB to PostgreSQL, redesigning schemas with JSONB for flexible, document-style storage.",
      "Built a Python-based Nginx log parser using Regex to extract, categorize, and track errors with automated, incremental CSV reporting.",
      "Developed Django-based CRUD modules with one-to-many and many-to-many relationships using Django ORM.",
      "Gained hands-on exposure to system design fundamentals including caching strategies (LRU/LFU), load balancing, and reverse proxy workflows."
    ]

  }
];

export const projects = [
  {
    name: "salonX",
    description:
    "Engineered a production-grade salon booking system with conflict-free, duration-based scheduling using server-side validation. Implemented secure authentication, relational database design, and scalable APIs to manage users, services, barbers, and real-time bookings.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/assets/salonX.png",
    source_code_link: "https://github.com/coderstyle56/Barberz-salon",
  },
  {
    name: "DecentraID",
    description:
    "Built a blockchain-based certificate verification system using Ethereum, SHA-256, and Web3.js to ensure tamper-proof identity validation. Developed a responsive React frontend and integrated backend APIs for secure, asynchronous verification workflows.               ",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "solidity", color: "green-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
      { name: "mongodb", color: "white-text-gradient" },
    ],
    image: "/assets/DecentraID.png",
    source_code_link: "https://github.com/karan123567/decentraID",
  },
  {
    name: "Muvii",
    description:
    "Built a responsive movie discovery platform using Next.js, React, and Tailwind CSS for mood- and genre-based exploration with scalable UI architecture. Currently developing a custom backend (no TMDB/IMDB dependency) to support niche categories and future AI-driven recommendations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "restapi", color: "brown-text-gradient" },
    ],
    image: "/assets/muvii.png",
    source_code_link: "https://github.com/coderstyle56/muvii-site",
  },
];

// export { services, technologies, experiences, projects };
