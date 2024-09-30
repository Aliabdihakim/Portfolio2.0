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
import styles from "./project.module.css"; // Import the CSS module
import {
  Globe,
  GithubLogo,
  HardDrives,
  Airplay,
  Rocket,
} from "@phosphor-icons/react/dist/ssr";
// import clsx from "clsx";
import Badge from "@/app/components/Badge";
import { Description } from "@/app/components/Description";
import IconDescription from "@/app/components/IconDescription";
import BlobGradient from "@/app/components/BlobGradient";

const page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find(
    (proj) => proj.title.toLowerCase() === params.slug.toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
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
          <button className="py-2 px-4 bg-black hover:bg-black/80 flex gap-2 items-center rounded-lg h-10">
            <p className="text-sm font-medium text-white">Visit website</p>
            <Globe className="text-white" weight="fill" size={18} />
          </button>
          <button className="py-2 px-4 bg-black hover:bg-black/80 flex gap-2 items-center rounded-lg h-10">
            <p className="text-sm font-medium text-white">Github</p>
            <GithubLogo className="text-white" weight="fill" size={18} />
          </button>
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
          // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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

        {/* Table for Technologies */}
        <div className="max-w-xl mx-auto mt-12 mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Tech stack</h2>
          <section className="flex justify-around">
            <div className="">
              <div className="flex items-center space-x-3">
                <IconDescription
                  title="Frontend"
                  titleSize="base"
                  titleWeight="semibold"
                  icon={<Airplay size={24} weight="fill" />}
                />
              </div>
              <div className="mt-3 flex flex-col flex-wrap gap-3">
                <Badge text="React.js" color="blue" />
                <Badge text="Redux" color="blue" />
                <Badge text="TypeScript" color="blue" />
                <Badge text="Tailwind CSS" color="blue" />
              </div>
            </div>
            <div className="">
              <IconDescription
                title="Backend"
                titleSize="base"
                titleWeight="semibold"
                icon={<HardDrives size={24} weight="fill" />}
              />
              <div className="mt-3 flex flex-col flex-wrap gap-3">
                <Badge text="Node.js" color="green" />
                <Badge text="Express.js" color="green" />
                <Badge text="TypeScript" color="green" />
                <Badge text="Postgres" color="green" />
                <Badge text="Prisma" color="green" />
              </div>
            </div>
            <div className="">
              <IconDescription
                title="Deployment"
                titleSize="base"
                titleWeight="semibold"
                icon={<Rocket size={24} weight="fill" />}
              />
              <div className="mt-3 flex flex-col flex-wrap gap-3">
                <Badge text="Vercel" color="purple" />
                <Badge text="GitHub Actions" color="purple" />
              </div>
            </div>
          </section>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
