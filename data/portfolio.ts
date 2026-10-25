// All site content lives here. Edit this file; the components stay untouched.

export const profile = {
  name: "Sandeep Kumar Murmu",
  firstName: "Sandeep",
  title: "Full-Stack & Backend Engineer",
  summary:
    "Specializing in scalable architecture, microservices, and payment systems.",
  experienceLine:
    "4+ years of experience building high-throughput backend designs for global banks and leading-edge companies.",
  resume: "/sandeepKumarMurmu.pdf", // put your PDF in /public
  email: "sandeep.16murmu@gmail.com",
  phone: "+91-9572256574",
  github: "https://github.com/sandeepKumarMurmu", // TODO: your profile URL
  linkedin: "https://www.linkedin.com/in/sandeep-kumar-murmu-0567181a9/", // TODO: your profile URL
  siteUrl: "https://sandeep.dev", // TODO: your domain
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  // { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "80%", label: "fewer payment failures" },
  { value: "70%", label: "lower video delivery cost" },
  { value: "4+ yrs", label: "building for global banks" },
];

export const experience = [
  {
    company: "Infosys Finacle (EdgeVerve)",
    role: "Product Technical Analyst",
    period: "Jan 2026 - Present",
    badge: { text: "Infosys", bg: "#007CC3" },
    bullets: [
      "Design core payment flows for the Finacle OE-Payment platform.",
      "Optimize architectures for transaction reliability, scaling, and performance.",
      "Translate complex business requirements into high-throughput designs.",
    ],
  },
  {
    company: "ALLEN Digital",
    role: "Senior Software Engineer",
    period: "Aug 2022 - Dec 2025",
    badge: { text: "ALLEN", bg: "#1B2A5C" },
    bullets: [
      "Engineered scalable microservices, reducing payment failures by 80%.",
      "Built a standalone VOD solution, cutting costs by 70%.",
      "Developed internal consoles with Node.js, NestJS, and MySQL.",
    ],
  },
  {
    company: "Masai School",
    role: "Full Stack Developer Trainee",
    period: "Aug 2021 - Jul 2022",
    badge: { text: "Masai", bg: "#E5322D" },
    bullets: [
      "Intensive training in MERN stack and API design.",
      "Built hands-on projects with Node.js, Express.js, and MongoDB.",
    ],
  },
];

// TODO: replace each "#" with a real URL, or delete the key to hide that link.
export const projects = [
  {
    title: "FinTech Core",
    subtitle: "OE-Payment Platform",
    summary: "High-throughput payment processing workflow.",
    bullets: [
      "Optimized architecture for global banks, achieving high transaction reliability and scalability.",
      "Implemented functional and technical specs into core backend designs.",
    ],
    tags: ["Node.js", "NestJS", "PostgreSQL", "Kafka"],
    links: { github: "#", demo: "#" } as Record<string, string>,
  },
  {
    title: "VOD Platform & Astra Console",
    subtitle: "Standalone video streaming and internal tools",
    summary: "Video delivery on AWS with a role-secured inventory console.",
    bullets: [
      "Engineered a VOD solution using AWS (EC2, S3, CDN), reducing delivery costs by 70%.",
      "Developed Astra Console for inventory with Node.js and strict RBAC.",
    ],
    tags: ["AWS", "EC2", "S3", "CDN", "Node.js", "MySQL", "RBAC"],
    links: { github: "#", caseStudy: "#" } as Record<string, string>,
  },
];

// export const skills = [
//   {
//     group: "Languages & Frameworks",
//     items: ["JavaScript", "TypeScript", "Node.js", "NestJS", "Express.js", "React.js"],
//   },
//   {
//     group: "Databases & Messaging",
//     items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"],
//   },
//   {
//     group: "Cloud & DevOps",
//     items: ["AWS (EC2, S3, CDN, CodePipeline)", "Docker", "Jenkins", "Git", "Jira"],
//   },
//   {
//     group: "Concepts & Tools",
//     items: ["Microservices", "Backend Design", "Payment Systems", "E-Commerce", "VOD", "RBAC", "NPM", "Swagger"],
//   },
// ];

// Colors are "R G B" for dark and light themes. Icons: code | database | cloud | layers.
export const primaryStack = ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Kafka", "AWS"];

export const skills = [
  {
    group: "Languages & Frameworks",
    blurb: "What I write production services in.",
    icon: "code",
    color: { dark: "124 155 255", light: "37 72 200" },
    items: ["JavaScript", "TypeScript", "Node.js", "NestJS", "Express.js", "React.js","LoopBack"],
  },
  {
    group: "Databases & Messaging",
    blurb: "Storing data and moving events reliably.",
    icon: "database",
    color: { dark: "79 209 176", light: "14 124 102" },
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"],
  },
  {
    group: "Cloud & DevOps",
    blurb: "Shipping and running it at scale.",
    icon: "cloud",
    color: { dark: "251 191 90", light: "171 98 8" },
    items: ["AWS (EC2, S3, CDN, CodePipeline)", "Docker", "Jenkins", "Git", "Jira"],
  },
  {
    group: "Concepts & Tools",
    blurb: "How I design and document systems.",
    icon: "layers",
    color: { dark: "176 148 255", light: "105 66 200" },
    items: ["Microservices", "Backend Design", "Payment Systems", "E-Commerce", "VOD", "RBAC", "NPM", "Swagger"],
  },
];