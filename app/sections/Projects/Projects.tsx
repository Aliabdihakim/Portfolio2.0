import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "./projects.utils";

const Projects = () => {
  return (
    <PageWrapper className="my-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl mb-12 flex justify-center">Selected project</h1>
        <div className="grid grid-cols-1 gap-8">
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
      </div>
    </PageWrapper>
  );
};

export default Projects;
