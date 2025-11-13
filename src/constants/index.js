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
];

export const projects = [
  {
    name: "salonX",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "restapi", color: "brown-text-gradient" },
    ],
    image: "/assets/muvii.png",
    source_code_link: "https://github.com/",
  },
];

// export { services, technologies, experiences, projects };

