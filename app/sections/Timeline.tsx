import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import CardContainer from "../components/CardContainer";
import clsx from "clsx";
import Image from "next/image";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      company: "Chromaway",
      title: "Senior Frontend Developer",
      date: "2022-2024",
      description: "",
    },
    {
      id: 2,
      company: "Dental Media",
      title: "Lead Frontend Developer",
      date: "2021-2022",
      description: "",
    },
  ];

  const colors = [
    "blue-500", // Chromaway color
    "pink-500", // Dental Media color
  ];

  return (
    <PageWrapper className="my-24 max-w-xl">
      <h1 className="text-4xl mb-12 flex justify-center">Experiences</h1>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => {
          return (
            <CardContainer
              key={exp.id}
              className={clsx(
                ` bg-white p-4 py-6 relative before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:opacity-75 before:blur-md hover:before:blur-lg before:bg-${colors[index]}`
              )}
            >
              <div className="flex items-center gap-6">
                <Image
                  alt="logo"
                  src="/icons/logo-black.svg"
                  width={80}
                  height={80}
                  className={clsx(
                    `border-2 border-${colors[index]} rounded-lg p-3`
                  )}
                />
                <div>
                  <p className="text-xs font-semibold text-gray-400 pb-3">
                    {exp.date}
                  </p>
                  <h2>{exp.company}</h2>
                  <p>{exp.title}</p>
                </div>
              </div>
            </CardContainer>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Timeline;
