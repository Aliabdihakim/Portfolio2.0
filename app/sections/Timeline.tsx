import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import CardContainer from "../components/CardContainer";
import clsx from "clsx";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      company: "Chromaway",
      title: "Senior Frontend Developer",
      date: "2022-2024",
      icon: "/icons/ch.png",
      description: "",
    },
    {
      id: 2,
      company: "Dental Media",
      title: "Lead Frontend Developer",
      date: "2021-2022",
      icon: "/icons/dl.svg",
      description: "",
    },
    {
      id: 3,
      company: "Fortum",
      title: "Frontend Developer",
      date: "2019-2021",
      icon: "/icons/ft.png",
      description: "",
    },
    {
      id: 4,
      company: "Ikea",
      title: "Fullstack Developer",
      date: "2017-2019",
      icon: "/icons/ik.png",
      description: "",
    },
  ];

  const colors = [
    "bg-green-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-blue-500",
  ];

  return (
    <PageWrapper className="my-24 max-w-2xl">
      <h1 className="text-4xl mb-12 flex justify-center">Experiences</h1>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => {
          return (
            <CardContainer
              key={exp.id}
              className={clsx(
                `group bg-white cursor-pointer p-8 relative before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:opacity-75 before:blur-md hover:before:blur-lg before:${colors[index]}`
              )}
            >
              <div className="flex items-center gap-8">
                <Image
                  alt="logo"
                  src={exp.icon}
                  width={80}
                  height={80}
                  className={clsx(`borde-2 border-${colors[index]} rounded-lg`)}
                />
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
    </PageWrapper>
  );
};

export default Timeline;
