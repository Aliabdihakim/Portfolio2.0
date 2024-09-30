import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const projects = [
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
    github: "https://oumli.com/",
  },
  {
    title: "Ledarskapsjouren",
    description:
      "A digital coaching platform that offers on-demand coaching to managers in municipalities via video call",
    image: "/icons/placeholder.png",
    showcase: [
      "/icons/ledarskapsjouren/ledarskapsjouren-1.png",
      "/icons/ledarskapsjouren/ledarskapsjouren-2.png",
      "/icons/ledarskapsjouren/ledarskapsjouren-3.png",
    ],
    website: "http://ledarskapsjouren.com/",
    github: "http://ledarskapsjouren.com/",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio, sharing my knowledge and experiences",
    image: "/icons/placeholder.png",
    showcase: [
      "/icons/ledarskapsjouren/ledarskapsjouren-1.png",
      "/icons/ledarskapsjouren/ledarskapsjouren-2.png",
      "/icons/ledarskapsjouren/ledarskapsjouren-3.png",
    ],
    website: "http://ledarskapsjouren.com/",
    github: "http://ledarskapsjouren.com/",
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
