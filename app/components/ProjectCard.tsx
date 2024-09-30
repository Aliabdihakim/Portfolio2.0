import Image from "next/image";
import React from "react";
import { Lightbulb, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import CardContainer from "./CardContainer";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <Link href={href} className="group">
      <CardContainer>
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
            src={image}
            alt={description}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-end items-start text-center text-white p-4 ">
            <h1 className="text-2xl font-bold transform transition-transform duration-300 group-hover:translate-x-2">
              {title}
            </h1>
            <p className="text-base font-light text-left mt-2 transform transition-transform duration-300 group-hover:translate-x-2">
              {description}
            </p>
          </div>
        </div>
      </CardContainer>
    </Link>
  );
};

export default ProjectCard;
