export type TechStack = {
  frontend?: string[];
  backend?: string[];
  deployment?: string[];
  testing?: string[];
};

export type DetailedDescription = {
  title?: string;
  text: string;
  image: string;
  darkImage?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  showcase: string[];
  website: string;
  github: string;
  techStack: TechStack;
  type: "client" | "personal";
  overview: string;
  role: string;
  detailedDescription: DetailedDescription[];
};

export const projects: Project[] = [
  {
    title: "Oumli",
    description:
      "Ecommerce site that delivers nutritious meals to support postpartum healing for new moms",
    image: "/oumli/oumli-1.png",
    showcase: [
      "/oumli/oumli-1.png",
      "/oumli/oumli-2.png",
      "/oumli/oumli-3.png",
    ],
    website: "https://oumli.com/",
    github: "http://github.com/Aliabdihakim",
    techStack: {
      frontend: ["React.js", "TypeScript", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Postgres", "Prisma"],
      deployment: ["Vercel", "GitHub Actions"],
    },
    type: "client",
    overview:
      "Oumli is a platform designed to offer healthy meals tailored for new moms to aid their postpartum recovery.",
    role: "Led the development of the full-stack application.",
    detailedDescription: [
      {
        title: "Development process",
        text: "To make Oumli easy to use and engaging, I chose React with TypeScript for a reliable, type-safe frontend. React Query was a game-changer for handling API requests, giving smooth data fetching, caching, and error handling. I used Zod to keep data validation and parsing consistent, making sure interactions with the backend stayed solid. Tailwind CSS brought the UI to life, making it responsive and clean on any device. The frontend was deployed to AWS S3 buckets with Route 53 for DNS management, CloudFront for chaching content delivery, and ACM for SSL certificates to ensure secure access. I used Github actions to autodeploy the frontend for this CI/CD setup.",
        image: "/oumli/oumli-frontend-architecture.png",
        darkImage: "/oumli/oumli-frontend-architecture-dark.png",
      },
      {
        title: "",
        text: "To make Oumli easy to use and engaging, we chose React with TypeScript...",
        image: "/oumli/fe.png",
      },
      {
        title: "Backend",
        text: "The backend utilized Node.js and Express.js to create a scalable server...",
        image: "/oumli/be.png",
      },
    ],
  },
];
