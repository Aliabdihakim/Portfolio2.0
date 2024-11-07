"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import { PageWrapper } from "@/app/components/PageWrapper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./project.module.css";
import { Globe, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Description } from "@/app/components/Description";
import BlobGradient from "@/app/components/BlobGradient";
import Link from "next/link";
import { projects } from "@/app/sections/Projects/projects.utils";

const page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find(
    (proj) => proj.title.toLowerCase() === params.slug.toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

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

        <section className="pt-8 pb-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">
            <Description
              title={<h1 className="text-2xl">Project Overview</h1>}
              description={<p className="text-base">{project.overview}</p>}
              gap={3}
            />
            <Description
              title={<h1 className="text-2xl">My Role</h1>}
              description={<p className="text-base">{project.role}</p>}
              gap={4}
            />
          </div>
        </section>

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

        <section className="pt-12 md:px-32 lg:px-48 ">
          {project.detailedDescription?.map((detail, index) => (
            <div key={index} className="py-8">
              {detail.title && (
                <h2 className="text-3xl font-semibold mb-4">{detail.title}</h2>
              )}
              <p className="text-base mb-4 leading-8 ">{detail.text}</p>
              {detail.image && (
                <div className="w-full h-[500px] relative mb-8">
                  <Image
                    src={detail.image}
                    alt={`${project.title} - ${detail.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
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

export default page;
