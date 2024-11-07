"use client";
import React from "react";
import PageWrapperWithHeader from "../components/PageWrapperWithHeader";
import ProjectCard from "../components/ProjectCard";
import BlobGradient from "../components/BlobGradient";
import { motion } from "framer-motion";
import { projects } from "../sections/Projects/projects.utils";

const page = () => {
  const projectVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative">
      <PageWrapperWithHeader
        title={<h1 className="text-4xl font-bold md:text-6xl">Projects</h1>}
        description={
          <p className="text-lg text-gray-300">
            The list of my projects. Everything was made with ❤️.
          </p>
        }
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={projectVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                href={`/projects/${project.title.toLocaleLowerCase()}`}
                type={project.type}
              />
            </motion.div>
          ))}
        </motion.div>
      </PageWrapperWithHeader>
      <div className="pt-48">
        <BlobGradient position="bottom" />
      </div>
    </div>
  );
};

export default page;
