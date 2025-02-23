"use client";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import CardContainer from "../components/CardContainer";
import { PageWrapper } from "../components/PageWrapper";
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
      company: "Aspia",
      title: "Lead Frontend Developer",
      date: "2023-2025",
      icon: "/icons/as.png",
      description:
        "At Aspia, I led the integration of Accountor into MyBusiness, Aspia’s platform for bookkeeping, invoicing, and time reporting. I developed a microfrontend architecture to ensure a seamless transition while maintaining Aspia’s branding. To connect both systems, I built MyOffice, a middleware platform, and implemented Redux Toolkit and RTK Query for state management. I also developed a feature flag system for controlled rollouts, using Hotjar and Sentry to gather user insights and improve features. To ensure stability, I wrote unit, integration, and end-to-end tests with Vitest, React Testing Library, MSW, and Playwright. I also maintained UI consistency with Storybook.",
    },
    {
      id: 2,
      company: "Chromaway",
      title: "Senior Full stack Developer",
      date: "2022-2023",
      icon: "/icons/ch.png",
      description:
        "I helped build Chromaway’s web ecosystem from the ground up, creating a web IDE, course platform, and a blockchain-based share ledger using React.js and TypeScript in a monorepo setup. I designed the course platform’s UI with Tailwind UI to make accessing materials and tutorials simple and engaging. For the web IDE, I wanted users to have a space to dive right into app development on Chromia, so I integrated it directly into the platform. I also crafted a share registry to track transfers and dividends using React and Blockchain APIs, ensuring a secure, transparent experience. I added Sentry for real-time error tracking and automated deployments with GitHub Actions to keep everything running smoothly.",
    },
    {
      id: 3,
      company: "Kvanta",
      title: "Fullstack Developer",
      date: "2020-2021",
      icon: "/icons/kv.png",
      description:
        "As a Frontend Developer at Kvanta, I focused on creating a smooth and user-friendly login experience, building the interface in React.js with TypeScript, React Hook Form, and ContextAPI for easy data handling and validation. I implemented the logic for share registry events—like dividends, splits, and new issues—by integrating Blockchain APIs, giving users a clear view of transactions. I added BankID authentication to ensure a seamless, secure login experience. Working closely with backend developers, I used TanStack Query to keep API calls in sync with the backend. I also tackled production bugs head-on, using CI/CD pipelines for quick updates.",
    },
    {
      id: 4,
      company: "Fortum",
      title: "Frontend Developer",
      date: "2019-2020",
      icon: "/icons/ft.png",
      description:
        "I led the migration of Fortum’s web app from Nunjucks to React.js with TypeScript, creating a smoother user experience with improved performance and maintainability. I developed and refined the login feature, integrating BankID for secure authentication, and used Material UI to design user-friendly dashboards displaying electricity usage stats, costs, and billing history. I also integrated Swish for seamless bill payments. Throughout, I worked closely with cross-functional teams to keep frontend and backend in sync.",
    },
  ];

  const education: Experience = {
    institution: "Royal Institute of Technology (KTH)",
    degree: "Master's Degree in Computer Science (Civ. ing Teknisk Fysik)",
    date: "2014-2019",
    icon: "/icons/kth.png",
    description:
      "I completed a Master of Science in Engineering Physics with a specialization in Computer Science at KTH, where I built a strong foundation in both advanced mathematics and software development. My studies gave me a deep understanding of problem-solving, algorithms, and data structures, which have been invaluable in my work as a developer. Through hands-on projects and coursework, I honed my skills in areas like data analysis, programming, and systems design, setting me up well for a career in tech.",
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
