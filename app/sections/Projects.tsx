import Image from "next/image";
import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Lightbulb, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import CardContainer from "../components/CardContainer";

const Projects = () => {
  const projects = [
    {
      title: "Oumli",
      description:
        "Ecommerce site that delivers nutritious meals to support postpartum healing for new moms",
      image: "/icons/placeholder.png",
    },
    {
      title: "Ledarskapsjouren",
      description:
        "A digital coaching platform that offers on-demand coaching to managers in municipalities via video call",
      image: "/icons/placeholder.png",
    },
  ];

  return (
    <PageWrapper className="my-24">
      <h1 className="text-4xl mb-12 flex justify-center">Selected projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          return (
            <Link
              key={project.title}
              href={`/projects/${project.title.toLocaleLowerCase()}`}
            >
              <CardContainer className="group relative">
                <div className="flex justify-between items-center p-4">
                  <div className="flex gap-4 items-center">
                    <Lightbulb size={18} />
                    <p className="text-base font-light">Project</p>
                  </div>
                  <ArrowUpRight
                    weight="bold"
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="relative w-full h-60">
                  <Image
                    src={project.image}
                    alt={project.description}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-end items-start text-center text-white p-4 ">
                    <h1 className="text-2xl font-bold transform transition-transform duration-300 group-hover:translate-x-2">
                      {project.title}
                    </h1>
                    <p className="text-base font-light text-left mt-2 transform transition-transform duration-300 group-hover:translate-x-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContainer>
            </Link>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Projects;
