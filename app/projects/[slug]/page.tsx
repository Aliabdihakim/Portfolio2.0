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
import styles from "./Project.module.css"; // Import the CSS module
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
      <div className="w-full max-w-3xl h-[20vh] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 blur-3xl opacity-70" />
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
              <div className="relative w-full h-[50vh]">
                <Image
                  src={image}
                  alt={`${project.title} showcase image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl bg-gray-800 p-12"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Table for Technologies */}
        <div className="mt-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Tech stack</h2>
          <table className="min-w-full border-collapse">
            <tbody>
              <tr>
                <td className="px-4 py-2 font-bold ">
                  <IconDescription
                    title="Frontend"
                    titleSize="base"
                    titleWeight="semibold"
                    icon={<Airplay size={24} weight="fill" />}
                  />
                </td>
                <td className="p-4 flex gap-3 items-center">
                  <Badge text="React.js" color="blue" />
                  <Badge text="Redux" color="blue" />
                  <Badge text="TypeScript" color="blue" />
                  <Badge text="Tailwind CSS" color="blue" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold ">
                  <IconDescription
                    title="Backend"
                    titleSize="base"
                    titleWeight="semibold"
                    icon={<HardDrives size={24} weight="fill" />}
                  />
                </td>
                <td className="p-4 flex gap-3 items-center">
                  <Badge text="Node.js" color="green" />
                  <Badge text="Express.js" color="green" />
                  <Badge text="TypeScript" color="green" />
                  <Badge text="OAuth" color="green" />
                  <Badge text="SQLite" color="green" />
                  <Badge text="Prisma" color="green" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold ">
                  <IconDescription
                    title="Deployment"
                    titleSize="base"
                    titleWeight="semibold"
                    icon={<Rocket size={24} weight="fill" />}
                  />
                </td>
                <td className="p-4 flex gap-3 items-center">
                  <Badge text="Vercel" color="purple" />
                  <Badge text="GitHub Actions" color="purple" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
