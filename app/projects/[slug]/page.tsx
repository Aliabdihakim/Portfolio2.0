"use client";
import React from "react";
import { projects } from "@/app/sections/Projects";
import Navbar from "@/app/components/Navbar";
import { PageWrapper } from "@/app/components/PageWrapper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./project.module.css";
import {
  Globe,
  GithubLogo,
  HardDrives,
  Airplay,
  Rocket,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import Badge, { BadgeColor } from "@/app/components/Badge";
import { Description } from "@/app/components/Description";
import IconDescription from "@/app/components/IconDescription";
import BlobGradient from "@/app/components/BlobGradient";
import Link from "next/link";

const page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find(
    (proj) => proj.title.toLowerCase() === params.slug.toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderTechStack = (
    category: string,
    techStack: string[] | undefined,
    icon: JSX.Element,
    color: BadgeColor
  ) => (
    <div>
      <IconDescription
        title={category}
        titleSize="base"
        titleWeight="semibold"
        icon={icon}
      />
      <div className="mt-3 flex flex-col flex-wrap gap-3">
        {(techStack ?? []).map((tech, index) => (
          <Badge key={index} text={tech} color={color} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <BlobGradient />
      <Navbar />
      <PageWrapper className="pt-40">
        <Description
          title={<h1 className="text-3xl font-bold">{project.title}</h1>}
          description={
            <p className="text-base text-gray-500">{project.description}</p>
          }
          gap={4}
        />

        <div className="flex gap-4 items-center py-12">
          <Link href={project.website}>
            <button className="py-2 px-4 bg-black hover:bg-black/80 flex gap-2 items-center rounded-lg h-10">
              <p className="text-sm font-medium text-white">Visit website</p>
              <Globe className="text-white" weight="fill" size={18} />
            </button>
          </Link>

          <Link href={project.website}>
            <button className="py-2 px-4 bg-black hover:bg-black/80 flex gap-2 items-center rounded-lg h-10">
              <p className="text-sm font-medium text-white">Github</p>

              <GithubLogo className="text-white" weight="fill" size={18} />
            </button>
          </Link>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
                <span class="${className} ${styles.customBullet} ${
                  className.includes("swiper-pagination-bullet-active")
                    ? styles.customBulletActive
                    : ""
                }"></span>
              `;
            },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {project.showcase.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[40vh]">
                <Image
                  src={image}
                  alt={`${project.title} showcase image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl bg-gray-800"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-xl mx-auto mt-12 mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Tech stack</h2>
          <section className="flex justify-around max-sm:flex-col max-sm:gap-8">
            {project.techStack.frontend &&
              renderTechStack(
                "Frontend",
                project.techStack.frontend,
                <Airplay size={24} weight="fill" />,
                "blue"
              )}
            {project.techStack.backend &&
              renderTechStack(
                "Backend",
                project.techStack.backend,
                <HardDrives size={24} weight="fill" />,
                "green"
              )}
            {project.techStack.deployment &&
              renderTechStack(
                "Deployment",
                project.techStack.deployment,
                <Rocket size={24} weight="fill" />,
                "purple"
              )}
            {project.techStack.testing &&
              renderTechStack(
                "Testing",
                project.techStack.testing,
                <Wrench size={24} weight="fill" />,
                "purple"
              )}
          </section>
        </div>
      </PageWrapper>
      <div className="pt-48">
        <BlobGradient position="bottom" />
      </div>
    </div>
  );
};

export default page;
