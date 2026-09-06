import contactPlusImage from "../assets/images/contact-plus.jpg";
import bloodBankImage from "../assets/images/obbms.jpg";

export const personal = {
  name: "Rutik Kale",
  role: "Software Engineer",
  currentTitle: "MERN Stack Developer",
  phone: "+91 9172475163",
  phoneHref: "tel:+919172475163",
  email: "kalerutik656@gmail.com",
  emailHref: "mailto:kalerutik656@gmail.com",
  location: "Pune, Maharashtra",
  linkedin: "https://www.linkedin.com/in/rutik-kale/",
  github: "https://github.com/rutikbkale",
  leetcode: "https://leetcode.com/u/rutikbkale/",
};

export const resumeUrl = `${import.meta.env.BASE_URL}Rutik-Kale-Resume.pdf`;

export const summary =
  "Software Engineer with nearly two years of experience building full-stack web applications with React.js, TypeScript, NestJS, Node.js, and MongoDB. I focus on responsive interfaces, secure REST APIs, real-time features, and modular systems that remain maintainable as products grow.";

export const expertise = [
  "React.js",
  "TypeScript",
  "NestJS",
  "Node.js",
  "MongoDB",
  "REST APIs",
];

export const experiences = [
  {
    id: "mitroz-technologies",
    company: "Mitroz Technologies",
    location: "Pune, Maharashtra",
    title: "MERN Stack Developer",
    duration: "Jan 2025 – Present",
    summary:
      "Developing full-stack business applications across responsive interfaces, backend services, data models, and third-party integrations.",
    responsibilities: [
      "Build scalable applications using React.js, TypeScript, NestJS, Node.js, MongoDB, and RESTful APIs with modular, maintainable architecture.",
      "Create responsive, reusable Material UI experiences including dashboards, forms, data tables, filtering, pagination, validation, and role-based workflows.",
      "Develop NestJS APIs with controllers, services, DTOs, middleware, validation, exception handling, authentication, and business logic.",
      "Implement JWT and OTP authentication, RBAC, protected routes, and permission-based workflows for multi-role applications.",
      "Integrate Razorpay and WebSockets for payment workflows, real-time trip and location updates, booking status changes, and live events.",
      "Design MongoDB data models and integrate AWS, OTP/SMS, push notifications, file storage, and maps/location services.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "Razorpay",
      "AWS",
    ],
  },
];

export const projects = [
  {
    id: "adrasha",
    name: "Adrasha",
    description:
      "A digital health-record management application for ASHA workers, supporting profile management, health records, and streamlined data tracking through responsive, API-driven interfaces.",
    techStack: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "TanStack Query",
      "Spring Boot",
      "MongoDB",
    ],
    github: "https://github.com/kiran-ghorpade/ADRASHA",
  },
  {
    id: "blood-bank-management-system",
    name: "Blood Bank Management System",
    description:
      "A web application for managing blood inventory, donors, blood requests, search, and request workflows through responsive interfaces and RESTful APIs.",
    techStack: ["React.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/rutikbkale/OBBMSBS",
    image: bloodBankImage,
  },
  {
    id: "contact-plus",
    name: "Contact Plus",
    description:
      "A contact management application with CRUD operations, pagination, sorting, and secure OAuth2 authentication through Google and GitHub.",
    techStack: [
      "Spring Boot",
      "Thymeleaf",
      "Tailwind CSS",
      "MySQL",
      "OAuth2",
    ],
    github: "https://github.com/rutikbkale/contactplus",
    image: contactPlusImage,
  },
];

export const techStack = [
  {
    id: "frontend",
    title: "Frontend & State",
    tech: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    tech: [
      "Node.js",
      "Express.js",
      "NestJS",
      "RESTful APIs",
      "JWT",
      "RBAC",
      "WebSockets",
    ],
  },
  {
    id: "database",
    title: "Databases",
    tech: ["MongoDB", "MySQL"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    tech: ["AWS EC2", "AWS S3", "Docker"],
  },
  {
    id: "tools",
    title: "Tools & Integrations",
    tech: ["Git", "GitHub", "Postman", "Swagger", "Razorpay"],
  },
];

export const educations = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "JSPM’s Rajarshi Shahu College of Engineering",
    location: "Tathawade, Pune, Maharashtra",
    grade: "9.27/10",
    duration: "Aug 2023 – May 2025",
  },
  {
    id: "bcs",
    degree: "Bachelor of Computer Science (BCS)",
    institution: "Sadguru Gadage Maharaj College",
    location: "Karad, Maharashtra",
    grade: "9.13/10",
    duration: "Sept 2020 – June 2023",
  },
];

export const certificates = [
  {
    id: "nptel-dsa",
    title: "Data Structures & Algorithms",
    issuer: "NPTEL",
    date: "Oct 2024",
  },
  {
    id: "jspm-hackathon",
    title: "Hackathon Participation",
    issuer: "JSPM Group",
    date: "Mar 2023",
  },
];
