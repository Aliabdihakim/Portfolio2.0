import Image from "next/image";
import React from "react";
import { Lightbulb, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import CardContainer from "./CardContainer";
import { Description } from "./Description";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  type?: "client" | "personal";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  href,
  type,
}) => {
  return (
    <Link href={href} className="group">
      <CardContainer>
        <div className="relative w-full h-60 mb-4">
          <Image
            src={image}
            alt={description}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-end items-start text-center text-white p-4 " />
        </div>
        <Description
          title={
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold transform transition-transform duration-300 ">
                  {title}
                </h1>
                <p className="text-base font-light italic">
                  {type === "client" ? "Client Project" : "Personal Project"}
                </p>
              </div>

              <ArrowUpRight
                weight="bold"
                size={18}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          }
          description={
            <p className="text-base font-light text-left mt-2 transform transition-transform duration-300 ">
              {description}
            </p>
          }
          gap={4}
        />
      </CardContainer>
    </Link>
  );
};

export default ProjectCard;
