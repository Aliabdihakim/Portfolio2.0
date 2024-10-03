"use client";
import React, { useState } from "react";
import { PageWrapper } from "../components/PageWrapper";
import CardContainer from "../components/CardContainer";
import clsx from "clsx";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ReusableDialog from "../components/ReusableDialog";

type Experience = {
  id?: number;
  company?: string;
  institution?: string;
  degree?: string;
  title?: string;
  date: string;
  icon: string;
  description: string;
};

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Chromaway",
      title: "Senior Frontend Developer",
      date: "2023-2024",
      icon: "/icons/ch.png",
      description:
        "Led frontend architecture and development of blockchain-based projects, focusing on performance optimization and user experience.",
    },
    {
      id: 2,
      company: "Kvanta",
      title: "Frontend Developer",
      date: "2021-2023",
      icon: "/icons/dl.svg",
      description:
        "Managed the frontend team and led the development of dental management software applications used by thousands of clinics.",
    },
    {
      id: 3,
      company: "Fortum",
      title: "Frontend Developer",
      date: "2020-2021",
      icon: "/icons/ft.png",
      description:
        "Developed reusable frontend components and optimized energy management solutions for large-scale applications.",
    },
  ];

  const education: Experience = {
    institution: "Royal Institute of Technology",
    degree: "Master's Degree in Computer Science (Civ. ing Teknisk Fysik)",
    date: "2015-2020",
    icon: "/icons/kth.png",
    description:
      "Completed a master's degree with a focus on software engineering, artificial intelligence, and system architecture.",
  };

  const colors = ["pink", "purple", "green"];

  const openDialog = (exp: Experience) => {
    setSelectedExperience(exp);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedExperience(null);
  };

  return (
    <PageWrapper className="my-24 max-w-2xl">
      <h1 className="text-4xl mb-12 flex justify-center">Experiences</h1>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => {
          return (
            <CardContainer
              key={exp.id}
              className={clsx(
                `group cursor-pointer p-8 relative`,
                `shadow-lg shadow-${colors[index]}-500`,
                `shadow-[0_0px_15px_-3px_rgba(0,0,0,0.1)]`,
                `transition-shadow duration-300 ease-in-out`
              )}
            >
              <div
                className="flex items-center gap-8"
                onClick={() => openDialog(exp)}
              >
                <Image alt="logo" src={exp.icon} width={80} height={80} />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-400 pb-3">
                    {exp.date}
                  </p>
                  <h2>{exp.company}</h2>
                  <p>{exp.title}</p>
                </div>
                <div className="ml-auto transform transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight weight="bold" size={24} />
                </div>
              </div>
            </CardContainer>
          );
        })}
      </div>

      <h1 className="text-4xl my-12 flex justify-center">Education</h1>
      <CardContainer className="group cursor-pointer p-8 relative shadow-lg shadow-blue-500 transition-shadow duration-300 ease-in-out">
        <div
          className="flex items-center gap-8"
          onClick={() => openDialog(education)}
        >
          <Image alt="logo" src={education.icon} width={80} height={80} />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-400 pb-3">
              {education.date}
            </p>
            <h2>{education.institution}</h2>
            <p>{education.degree}</p>
          </div>
          <div className="ml-auto transform transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight weight="bold" size={24} />
          </div>
        </div>
      </CardContainer>

      <ReusableDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={
          selectedExperience?.company || selectedExperience?.institution || ""
        }
        description={selectedExperience?.description || ""}
      />
    </PageWrapper>
  );
};

export default Timeline;
