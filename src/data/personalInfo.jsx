import musichub from "../assets/images/music-hub.png";
import contactplus from "../assets/images/contact-plus.jpg";
import blogVerse from "../assets/images/blog-verse.jpg";
import expenseTracker from "../assets/images/expense-tracker.jpg";
import ars from "../assets/images/ars.jpg";
import obbms from "../assets/images/obbms.jpg";

export const personal = {
  name: "Rutik Kale",
  mobNo: "9172475163",
  email: "kalerutik656@gmail.com",
  address: "Pune, Maharashtra",
  linkedin: "https://www.linkedin.com/in/rutik-kale-382793218/",
  github: "https://github.com/rutikbkale",
  leetcode: "https://leetcode.com/u/rutikbkale/",
};

export const educations = [
  {
    id: 1,
    name: "Master of Computer Application(MCA)",
    university: "Savitribai Phule Pune University, Pune",
    grade: "9.5",
    duration: "2023 - 2025",
  },
  {
    id: 2,
    name: "Bachelor of Computer Science(BCS)",
    university: "Shivaji University, Kolhapur",
    grade: "9.13",
    duration: "2020 - 2023",
  },
];

export const summary =
  "I am a motivated individual with a strong passion for learning and self-growth. As a quick learner and team player, I embrace challenges and responsibilities with enthusiasm. I enjoy solving problems creatively, backed by an analytical mindset and attention to detail. I value hard work, dedication, and continuous skill development.";

export const projects = [
  {
    id: 1,
    name: "Contact Plus",
    description:
      "Contact Plus is a web-based contact management system designed to simplify the organization and retrieval of contact information. Built using Spring Boot as the backend framework and Thymeleaf as the template engine for generating dynamic web pages, the application allows users to securely store and manage their contact lists.",
    techStack: ["Springboot", "Thymeleaf", "Tailwind css", "MySQL"],
    link: "https://github.com/rutikbkale/contactplus",
    image: contactplus,
  },
  {
    id: 2,
    name: "Blog verse",
    description:
      "BlogVerse is a Spring MVC-based web application that allows users to create and manage their own blogs across various categories. The platform promotes interaction and engagement among users by enabling them to read, like, and comment on blogs created by others. BlogVerse provides a user-friendly interface and essential features to make blogging an enjoyable and interactive experience.",
    techStack: ["Springboot", "Spring MVC", "JSP", "Bootstrap css", "MySQL"],
    link: "https://github.com/rutikbkale/Blog-Verse",
    image: blogVerse,
  },
  {
    id: 3,
    name: "Expense Tracker",
    description:
      "Expense Tracker is a Java-based web application designed to help users efficiently manage and track their day-to-day expenses. This application allows users to record, categorize, and monitor their expenditures, providing a clear overview of their financial habits and aiding in budget management.",
    techStack: ["Servlet", "MVC Architecture", "JSP", "Bootstrap css", "MySQL"],
    link: "https://github.com/rutikbkale/Expanse-Tracker",
    image: expenseTracker,
  },
  {
    id: 4,
    name: "Online Blood Bank Management System",
    description:
      "The Online Blood Bank Management System is a web-based application designed to streamline the process of blood donation and requisition by bringing all stakeholders—donors, patients/recipients, and blood bank administrators—onto a single platform. This system simplifies the management of blood inventory and ensures efficient communication between users.",
    techStack: ["Servlet", "MVC Architecture", "JSP", "Bootstrap css", "MySQL"],
    link: "https://github.com/rutikbkale/OBBMSBS",
    image: obbms,
  },
  {
    id: 5,
    name: "Music Hub",
    description:
      "This is a dynamic music website developed using HTML, CSS, and JavaScript, designed to provide a platform where users can explore and listen to a curated playlist. The website combines an engaging user interface with seamless functionality to deliver a smooth music-listening experience.",
    techStack: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/rutikbkale/musichub",
    image: musichub,
  },
  {
    id: 6,
    name: "Airline Reservation System",
    description:
      "The Airline Reservation System is a ticket booking platform designed to simplify and automate the process of reserving flight tickets. The system enables users to input their travel details, such as source and destination, and view available flight options based on their preferences. It aims to provide a seamless and user-friendly experience for booking tickets and retrieving flight information.",
    techStack: ["AWT", "Swing", "MySQL"],
    link: "https://github.com/rutikbkale/A_R_S_Project",
    image: ars,
  },
];

export const techStack = [
  {
    id: 1,
    title: "FrontEnd",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "BackEnd",
    tech: ["Java", "Python", "C++", "Php"],
  },
  {
    id: 3,
    title: "Database",
    tech: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Framework",
    tech: [
      "React" js,
      "Node js",
      "Express js",
      "Material UI",
      "Spring",
      "Springboot",
      "Hibernate",
      "Bootstrap",
      "Tailwind css",
    ],
  },
  {
    id: 5,
    title: "Tools",
    tech: [
      "Git",
      "Github",
      "VS code",
      "Eclipse",
      "Netbeans",
      "Postman",
    ],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Programming data structure & algorithm",
    issuer: "NPTEL",
    date: "2024-09-22",
  },
  {
    id: 2,
    title: "Hackthon Partition",
    issuer: "JSPM group",
    date: "2024-03-20",
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    issuer: "Infosys Springboard",
    date: "2023-11-02",
  },
  {
    id: 4,
    title: "Full Stack Java Developer",
    issuer: "Besant Technologies",
    date: "2023-06-12",
  },
];
