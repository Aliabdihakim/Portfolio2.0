"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { PageWrapper } from "@/app/components/PageWrapper";
import Image from "next/image";
import {
  Globe,
  GithubLogo,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import { Description } from "@/app/components/Description";
import BlobGradient from "@/app/components/BlobGradient";
import Link from "next/link";
import { projects } from "@/app/sections/Projects/projects.utils";

const Page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find(
    (proj) => proj.title.toLowerCase() === params.slug.toLowerCase()
  );

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.showcase.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.showcase.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <BlobGradient />
      <Navbar />
      <PageWrapper className="pt-40">
        <Description
          title={<h1 className="text-5xl font-bold">{project.title}</h1>}
          description={
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          }
          gap={2}
        />
        <div className="flex gap-4 items-center pt-2 pb-12">
          <Link href={project.website}>
            <button className="py-2 px-4 bg-black hover:bg-black/80 flex gap-2 items-center rounded-lg h-10">
              <p className="text-sm font-medium text-white">Visit website</p>
              <Globe className="text-white" weight="fill" size={18} />
            </button>
          </Link>

          <Link href={project.github}>
            <button className="py-2 px-4 bg-black hover:bg-black/80 flex gap-2 items-center rounded-lg h-10">
              <p className="text-sm font-medium text-white">Github</p>
              <GithubLogo className="text-white" weight="fill" size={18} />
            </button>
          </Link>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={handlePrevImage} className="absolute left-0 p-2">
            <CaretLeft
              size={32}
              className="text-gray-500 hover:text-gray-700"
            />
          </button>

          <div className="flex">
            <Image
              src={project.showcase[currentImageIndex]}
              alt={`${project.title} showcase image ${currentImageIndex + 1}`}
              width={700}
              height={400}
              className="rounded-xl p-4"
            />
          </div>

          <button onClick={handleNextImage} className="absolute right-0 p-2">
            <CaretRight
              size={32}
              className="text-gray-500 hover:text-gray-700"
            />
          </button>
        </div>

        <section className="pt-12 md:px-32 lg:px-48 ">
          <div className="">
            <Description
              title={<h1 className="text-3xl mb-4">Project Overview</h1>}
              description={
                <p className="text-base mb-6 leading-8">{project.overview}</p>
              }
              gap={3}
            />
          </div>

          {project.detailedDescription?.map((detail, index) => (
            <div key={index} className="">
              {detail.title && (
                <h2 className="text-3xl font-semibold mb-4">{detail.title}</h2>
              )}
              <p className="text-base pb-12 leading-8 ">{detail.text}</p>
              {detail.image && (
                <div className="w-full h-[500px] relative mb-8">
                  <Image
                    src={detail.image}
                    alt={`${project.title} - ${detail.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg bg-white p-4"
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </PageWrapper>

      <div className="pt-48">
        <BlobGradient position="bottom" />
      </div>
    </div>
  );
};

export default Page;
