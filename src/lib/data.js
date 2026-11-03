// Ali Zain portfolio content — plain JS, no types.
// Original info from https://pczain76-sudo.github.io/Portfolio/
// Edit this file freely to update any text/links.

export const profile = {
  name: "Ali Zain",
  role: "Software Developer",
  roleFull: "Next.js Full Stack Developer", 
  email: "pczain76@gmail.com",
  profileImage: "/profile.jpeg",
  phone: "+92 302 6389629",
  location: "Pakistan",
  available: true,
  bio: "I am a passionate Full Stack Developer specializing in Next.js, MERN Stack, and PERN Stack development. I focus on building responsive, scalable, and interactive web applications using modern technologies. I enjoy developing real-world projects, creating seamless user experiences, and continuously improving my problem-solving skills through hands-on development.",
  about:
    "I am a passionate Full Stack Developer specializing in Next.js, MERN Stack, and PERN Stack development. I focus on building responsive, interactive, and scalable web applications using modern technologies. I have hands-on experience working with real-world projects, including API integration, database management, and dynamic user interfaces. I enjoy solving complex problems, developing practical applications, and continuously expanding my skills to build efficient, user-friendly, and full-stack web solutions.",
  shortPitch:
    "Building responsive, interactive, and scalable web applications with Next.js, React, JavaScript, and modern technologies — specializing in MERN & PERN Stack development.",
};

export const socials = [
  { name: "GitHub", handle: "pczain76-sudo", url: "https://github.com/pczain76-sudo", icon: "github" },
  { name: "LinkedIn", handle: "Ali Zain", url: "https://www.linkedin.com/in/alizain-developer", icon: "linkedin" },
  { name: "Twitter / X", handle: "Ali Zain", url: "https://twitter.com/gondal_az", icon: "twitter" },

  { name: "Email", handle: "pczain76@gmail.com", url: "mailto:pczain76@gmail.com", icon: "mail" },];

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 7, suffix: "+" },
  { label: "Months Coding", value: 18, suffix: "+" },
  { label: "Cups of Chai", value: 999, suffix: "+" },
];

export const services = [
 {
  icon: "layout",
  title: "Frontend Development",
  description:
    "Build responsive, modern, and interactive web applications using React, Next.js, HTML, CSS, and JavaScript with clean UI, reusable components, and optimized user experiences.",
  features: [
    "React & Next.js Development",
    "Modern CSS / Tailwind CSS",
    "Responsive & Mobile-first Design",
    "Reusable Components",
    "Accessibility (a11y)",
    "Performance Optimization",
  ],
},
 {
  icon: "code",
  title: "Full Stack JavaScript Development",
  description:
    "Develop dynamic, scalable web applications using JavaScript, React, Next.js, and Node.js with REST API integration, server-side functionality, and seamless frontend-backend communication.",
  features: [
    "Modern JavaScript (ES6+)",
    "React & Next.js",
    "Node.js & Express.js",
    "REST API Development & Integration",
    "Authentication & Authorization",
    "Server-side Functionality",
  ],
},
 {
  icon: "responsive",
  title: "Responsive UI & Web Design",
  description:
    "Create modern, visually appealing, and fully responsive web interfaces using Tailwind CSS and modern styling techniques, ensuring consistent user experiences across desktops, tablets, and mobile devices.",
  features: [
    "Tailwind CSS & Modern CSS",
    "Mobile-first Development",
    "Responsive Layouts",
    "Cross-browser Compatibility",
    "UI/UX Best Practices",
    "Performance Optimization",
  ],
},
  {
  icon: "monitor",
  title: "Desktop & Web Application Development",
  description:
    "Develop feature-rich desktop and web applications, including ERP, POS, billing, inventory, and business management systems using Next.js, React, Electron.js, Node.js, Express.js, and Tailwind CSS.",
  features: [
    "ERP & Business Management Systems",
    "POS & Billing Software",
    "Inventory & Stock Management",
    "Desktop Applications with Electron.js",
    "Next.js & React Development",
  
   
  ],
},
];

export const technicalSkills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "Electron.js", level: 75 },
  { name: "REST APIs", level: 80 },
  { name: "Git & GitHub", level: 80 },
];

export const professionalSkills = [
  { name: "Creativity", level: 90 },
  { name: "Communication", level: 79 },
  { name: "Problem Solving", level: 85 },
  { name: "Team Work", level: 69 },
];

export const experience = [
  {
    role: "Full Stack Desktop Application Developer",
    org: "Sialkot International Airport Limited",
    period: "July 2026 — October 2026",
    location: "Sialkot, Punjab, Pakistan",
    description:
      "Built a desktop inventory & billing system , Staff Vault and Card Generater Web for distribution businesses using Electron.js and MongoDB Atlas. Designed for speed and reliability — thermal receipts, live stock sync across PCs, and self-cleaning of old records.",
    highlights: [
      "Native Electron desktop app — feels like software, not a website",
      "Cloud MongoDB Atlas — every PC sees the same stock, live",
      "Thermal receipts & sales reports in one click",
      "Auto-expire data — old records clean themselves after a year",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Oasis Infobyte",
    period: "July 2026 — August 2026",
    location: "New Delhi, India (Remote)",
    description:
      "Front-End Development internship building responsive web applications with React.js and Tailwind CSS. Focused on component-based development, state management, routing, and clean maintainable code.",
    highlights: [
      "Built a functional Calculator app with React",
      "Created a responsive Tribute Page",
      "Developed a Todo List app with full CRUD functionality",
      "Implemented an Authentication System with login & registration flows",
    ],
  },
  {
    role: "Full Stack Engineer",
    org: "CodeAlpha",
    period: "July 2026 — August 2026",
    location: "New Delhi, India (Remote)",
    description:
      "Delivered two complete MERN stack projects from scratch during a full stack internship. Architected and built scalable web applications with React, Node.js, Express, and MongoDB.",
    highlights: [
      "E-Commerce Platform — React UI, Context API cart, JWT auth, MongoDB order flow",
      "Mini Social Media App — smart feed, real-time like/unlike, follow network",
      "Built RESTful APIs with Node.js + Express + JWT authentication",
      "Modeled complex MongoDB schemas with relations for posts, users, follows",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Hustler Clothee",
    period: "May 2026 — June 2026",
    location: "Sialkot, Punjab, Pakistan",
    description:
      "Built a modern, fully responsive e-commerce website using React.js, Tailwind CSS, and Email.js. Focused on clean UI/UX, dynamic product sections, and smooth navigation across all devices.",
    highlights: [
      "Dynamic product sections with responsive layouts",
      "Email.js integration for contact form (no backend needed)",
      "Component-based architecture for maintainability",
      "Mobile-first design with smooth navigation",
    ],
  },
  {
  role: "Frontend Developer",
  org: "Pedro Iz",
  period: "March 2026 — April 2026",
  location: "Remote",
  description:
    "Developed a modern and responsive website for Pedro Iz, focusing on clean UI/UX, reusable React components, and smooth user interactions. Built an engaging web experience with responsive layouts and modern frontend technologies.",
  highlights: [
    "Developed responsive website layouts for different screen sizes",
    "Built reusable and maintainable React components",
    "Implemented modern UI designs using Tailwind CSS",
    "Improved user experience with smooth navigation and interactive elements",
    "Focused on clean code structure and frontend performance",
  ],
},
{
  role: "Frontend Developer",
  org: "Custom Card Generator",
  period: "January 2026 — February 2026",
  location: "Remote",
  description:
    "Developed an interactive Custom Card Generator web application using JavaScript, HTML, and CSS. Focused on creating a user-friendly experience that allows users to customize card content, generate personalized cards, and preview their designs dynamically.",
  highlights: [
    "Built an interactive custom card generation interface",
    "Implemented dynamic card customization using JavaScript",
    "Created live card previews based on user input",
    "Designed a responsive layout for different screen sizes",
    "Used DOM manipulation to update card content dynamically",
  ],
},
{
  role: "Software Developer",
  org: "Medical Store Billing System",
  period: "November 2025 — December 2025",
  location: "Sialkot, Punjab, Pakistan",
  description:
    "Developed a desktop-based Medical Store Billing and Management System using React.js, Tailwind CSS, and Better-SQLite. Designed to simplify daily pharmacy operations through efficient billing, medicine management, sales tracking, and database-driven record management.",
  highlights: [
    "Developed an interactive medical store billing interface",
    "Implemented medicine and product management",
    "Built sales transaction and invoice generation functionality",
    "Integrated Better-SQLite for local database storage",
    "Designed responsive and user-friendly interfaces using Tailwind CSS",
    "Streamlined daily billing and store management operations",
  ],
},

  {
    role: "BS Software Engineering Student",
    org: "University of Sialkot",
    period: "August 2020 — August 2024",
    location: "Sialkot, Punjab, Pakistan",
    description:
      "Completed a 4-year BS Software Engineering degree. Built and deployed multiple semester projects covering web development, databases, and software design patterns.",
    highlights: [
      "Built 10+ semester projects across the curriculum",
      "Practiced full SDLC — from requirements to deployment",
      "Foundation in algorithms, databases, and software engineering",
    ],
  },
];
export const education = [
  {
    degree: "BS Software Engineering",
    institution: "University of Sialkot",
    period: "2024 ",
    location: "Sialkot, Pakistan",
    description:
      "Pursuing a Bachelor's degree in Software Engineering, focusing on software development, programming, database systems, and modern application development.",
  },
  {
    degree: "FSc (Pre-Engineering)",
    institution: "ILM Group of Colleges",
    period: "2020",
    location: "Pakistan",
    description:
      "Completed intermediate education in the pre-engineering group, building a foundation in mathematics, physics, and analytical problem-solving.",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Government High School",
    period: "2017",
    location: "Pakistan",
    description:
      "Completed secondary education in the science group, developing an early interest in technology, mathematics, and computers.",
  },
];
export const projects = [
{
  slug: "hustler-clothee",
  title: "Hustler Clothee – E-commerce Website",
  description:
    "Developed a modern fashion e-commerce website for Hustler Clothee, featuring a stylish storefront, product-focused layout, and a user-friendly shopping experience.",
  tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "E-commerce"],
  features: [
    "Modern fashion e-commerce storefront",
    "Product showcase and browsing",
    "Responsive design for all devices",
    "Clean and user-friendly interface",
    "Optimized shopping experience",
  ],
  liveUrl: "https://www.hustlerclothee.com/",
  repoUrl: "https://github.com/pczain76-sudo/Hustler-Clothee.git",
  status: "Live",
},
  {
  slug: "custom-card-generator",
  title: "Custom Card Generator for SKT INTL Airport",
  description:
    "Developed an interactive custom card generator that allows users to create and personalize cards with a simple and user-friendly interface.",
  tags: ["JavaScript", "HTML5", "CSS3", "DOM"],
  features: [
    "Create custom cards",
    "Personalize card content and design",
    "Interactive user interface",
    "Live card preview",
    "Responsive design",
    "Only for SKT INTL Airport"
  ],
  liveUrl: "https://pczain76-sudo.github.io/Custom-Card-Generator/",
  repoUrl: "https://github.com/pczain76-sudo/Custom-Card-Generator",
  status: "Live",
},
  {
  slug: "pedro-iz",
  title: "Pedro Iz - E-commerce Website",
  description:
    "Developed a modern website with an interactive user interface, responsive layout, and engaging visual design. For a Small Startup in Sialkot",
  tags: ["Next.js", "React", "JavaScript", "CSS"],
  features: [
    "Modern website design",
    "Responsive layout",
    "Interactive user interface",
    "Clean and engaging visual experience",
    "For a small Startup"
  ],
  liveUrl: "https://pedro-iz.vercel.app/",
  repoUrl: "https://github.com/pczain76-sudo/Pedro_iz",
  status: "Live",
},
{
  slug: "distribution-management-system",
  title: "Distribution Management System",
  description:
    "Developed a complete Distribution Management System for a client to streamline business operations, including inventory management, purchase entries, sales billing, delivery tracking, customer accounts, and financial management.",
  tags: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Better-SQLite",
  ],
  features: [
    "Product & Multi-Rate Management (Purchase, Sale, Retail & Wholesale)",
    "Purchase Entry & Batch-Wise Stock Management",
    "FIFO-Based Stock Handling",
    "Order Booking, Route & Customer Management",
    "Sales Billing & Invoice Generation",
    "Delivery & Bill Approval Workflow",
    "Cash, Partial Payment & Credit Management",
    "Customer Ledger & Outstanding Balance Tracking",
    "Sales Returns & Company Returns Management",
    "Daily Cash Handover & Expense Tracking",
    "Business Reports with Excel Export & Printing",
    "Automated Backup, Audit Logs & Data Retention",
  ],
  liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7523271998312050689/",
  repoUrl: "",
  status: "Completed",
},
{
  slug: "medical-store-billing-system",
  title: "Medical Store Billing System",
  description:
    "Developed a desktop billing and management system for a medical store using React, Tailwind CSS, and Better-SQLite. The application is designed to simplify billing operations and manage daily store transactions efficiently.",
  tags: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Better-SQLite",
  ],
  features: [
    "Medical Store Billing & Invoice Generation",
    "Product & Medicine Management",
    "Sales Transaction Management",
    "Database-Driven Data Storage",
    "User-Friendly Billing Interface",
    "Daily Business Operations Management",
  ],
  liveUrl: "",
  repoUrl: "",
  status: "Completed",
},
{
  slug: "airport-staff-management-system",
  title: "Airport Staff Management & ID Card Generator",
  description:
    "Developed a staff management system for Sialkot International Airport to manage employee records and generate professional staff ID cards with a single click. The system allows administrators to manage staff information efficiently through complete CRUD functionality and instantly generate ID cards using stored employee data.",
  tags: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "DOM Manipulation",
  ],
  features: [
    "Complete Airport Staff Records Management",
    "Add, Edit, Update & Delete Staff Information",
    "Centralized Employee Data Management",
    "One-Click Staff ID Card Generation",
    "Automatic ID Card Generation from Stored Records",
    "Dynamic Employee Information Display",
    "User-Friendly Management Interface",
  ],
  liveUrl: "",
  repoUrl: "",
  status: "Completed",
},
{
  slug: "airport-warehouse-inventory-management",
  title: "Airport Warehouse & Inventory Management System",
  description:
    "Developed a complete online Warehouse Inventory and Billing Management System for Sialkot International Airport, enabling staff to manage central warehouse operations and distribute products across multiple airport shops using multiple computers. The system provides centralized inventory management, shop-wise billing, stock tracking, and detailed business reports.",
  tags: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
  ],
  features: [
    "Online Multi-User Warehouse Management",
    "Centralized Warehouse Stock Management",
    "Product & Inventory Management",
    "Stock In / Stock Out Tracking",
    "Shop-Wise Product Distribution",
    "Shop-Wise Billing & Sales Management",
    "Low Stock Alerts & Reports",
    "Individual Shop Sales Reports",
    "Complete Stock Movement Reports",
    "Real-Time Centralized Data Access",
    "Multi-Computer Access",
    "Inventory Tracking & Monitoring",
  ],
  liveUrl: "",
  repoUrl: "",
  status: "Completed",
},
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
