export type TechStack = {
  frontend?: string[];
  backend?: string[];
  deployment?: string[];
  testing?: string[];
};

export type DetailedDescription = {
  title?: string;
  text: string;
  image?: string;
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
  detailedDescription: DetailedDescription[];
};

export const projects: Project[] = [
  {
    title: "Oumli",
    description:
      "Ecommerce site that delivers nutritious meals to support postpartum healing for new moms",
    image: "/oumli/oumli-1.png",
    showcase: ["/oumli/oumli-1.png", "/oumli/oumli-2.png"],
    website: "http://oumli.com.s3-website-us-east-1.amazonaws.com/",
    github: "http://github.com/Aliabdihakim",
    techStack: {
      frontend: ["React.js", "TypeScript", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Postgres", "Prisma"],
      deployment: ["Vercel", "GitHub Actions"],
    },
    type: "client",
    overview:
      "Oumli is a platform created in collaboration with the Järva district municipality to provide nutritious, postpartum-focused meals for new moms, supporting their recovery and wellness. I led the development of the full-stack application, ensuring a seamless user experience from frontend to backend.",
    detailedDescription: [
      {
        title: "Development process",
        text: "To make Oumli easy to use and engaging, I chose React with TypeScript for a reliable, type-safe frontend. React Query was a game-changer for handling API requests, giving smooth data fetching, caching, and error handling. I used Zod to keep data validation and parsing consistent, making sure interactions with the backend stayed solid. Tailwind CSS brought the UI to life, making it responsive and clean on any device. The frontend was deployed to AWS S3 buckets with Route 53 for DNS management, CloudFront for chaching content delivery, and ACM for SSL certificates to ensure secure access. I used Github actions to autodeploy the frontend for this CI/CD setup.",
        image: "/oumli/oumli-frontend-architecture.png",
      },
      {
        text: "Oumli’s backend was built to be fast and dependable, powered by TypeScript, Node.js, and Express.js for type-safe, scalable server-side development Prisma ORM made database management with PostgreSQL simple and type-safe We stuck to RESTful API principles to keep everything straightforward and easy to scale The backend was deployed on AWS EC2, ensuring a robust and flexible server environment that could handle varying loads GitHub Actions facilitated continuous integration and deployment, ensuring updates were seamlessly implemented",
        image: "/oumli/oumli-full-architecture.png",
      },
      {
        title: "Final notes",
        text: "Developing Oumli was more than just a technical endeavor—it was a meaningful project centered on community support and wellness. Through close collaboration with the Järva district municipality, we brought a platform to life that not only delivers nutritious meals but also reflects a commitment to supporting new moms in a critical phase of their journey.",
      },
    ],
  },
];
