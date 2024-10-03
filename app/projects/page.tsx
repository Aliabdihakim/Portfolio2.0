import React from "react";
import PageWrapperWithHeader from "../components/PageWrapperWithHeader";
import { projects } from "../sections/Projects";
import ProjectCard from "../components/ProjectCard";
import BlobGradient from "../components/BlobGradient";

const page = () => {
  return (
    <div className="relative">
      <PageWrapperWithHeader
        title={<h1 className="text-4xl font-bold md:text-5xl">Projects</h1>}
        description={
          <p className="text-base text-gray-600">
            The list of my projects. Everything was made with ❤️.
          </p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              href={`/projects/${project.title.toLocaleLowerCase()}`}
            />
          ))}
        </div>
      </PageWrapperWithHeader>
      <div className="pt-48">
        <BlobGradient position="bottom" />
      </div>
    </div>
  );
};

export default page;
