import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type TechStack = {
  frontend?: string[];
  backend?: string[];
  deployment?: string[];
  testing?: string[];
};

type Project = {
  title: string;
  description: string;
  image: string;
  showcase: string[];
  website: string;
  github: string;
  techStack: TechStack;
  type: "client" | "personal";
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
      // testing: ["Jest", "React Testing Library"],
    },
    type: "client",
  },
  {
    title: "Ledarskapsjouren",
    description:
      "A digital coaching platform that offers on-demand coaching to managers in municipalities via video call",
    image: "/ledarskapsjouren/ledarskapsjouren-1.png",
    showcase: [
      "/ledarskapsjouren/ledarskapsjouren-1.png",
      "/ledarskapsjouren/ledarskapsjouren-2.png",
      "/ledarskapsjouren/ledarskapsjouren-3.png",
    ],
    website: "http://ledarskapsjouren.netlify.app/",
    github: "http://github.com/Aliabdihakim",
    techStack: {
      frontend: ["React.js", "TypeScript", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Postgres", "Prisma"],
      deployment: ["Vercel", "GitHub Actions"],
      testing: ["Jest", "Playwright"],
    },
    type: "client",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio, sharing my knowledge and experiences",
    image: "/portfolio/portfolio-1.png",
    showcase: [
      "/portfolio/portfolio-1.png",
      "/portfolio/portfolio-2.png",
      "/portfolio/portfolio-3.png",
    ],
    website: "http://aliabdihakim.dev/",
    github: "http://github.com/Aliabdihakim",
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Postgres", "Supabase", "Prisma"],
      deployment: ["Vercel", "GitHub Actions"],
      testing: ["Jest"],
    },
    type: "personal",
  },
];

const Projects = () => {
  return (
    <PageWrapper className="my-24">
      <h1 className="text-4xl mb-12 flex justify-center">Selected projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            href={`/projects/${project.title.toLocaleLowerCase()}`}
            type={project.type}
          />
        ))}
      </div>
      <Link href={`/projects`} className="flex justify-center my-16">
        <Button variant="outline">See all projects</Button>
      </Link>
    </PageWrapper>
  );
};

export default Projects;
