"use client";
import React, { RefObject, useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import IconDescription from "./IconDescription";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useParams } from "next/navigation";

const Navbar = ({
  projectsRef,
  aboutRef,
  timelineRef,
  contactRef,
}: {
  projectsRef?: RefObject<HTMLDivElement>;
  aboutRef?: RefObject<HTMLDivElement>;
  timelineRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation("common");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const params = useParams(); // Get current route parameters
  const isHomePage = !params?.slug; //

  console.log({ params, isHomePage });

  const scrollToSection = (sectionRef?: RefObject<HTMLDivElement>) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref is undefined or not attached to a DOM element");
    }
  };

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <header className="bg-white bg-opacity-80 dark:bg-gray-900 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-lg saturate-100 backdrop-blur-[10px] transition-colors">
      <Link href="/">
        <Image alt="navbar-logo" src="/icons/logo.png" width={40} height={40} />
      </Link>
      <div className="flex gap-0 items-center">
        {isHomePage && (
          <div className="flex gap-8 items-center border-r-2 pr-6 dark:border-gray-700">
            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </button>

            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </button>

            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(timelineRef)}
            >
              Experiences
            </button>

            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </button>
          </div>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              {theme === "light" ? (
                <Sun weight="bold" size={20} />
              ) : (
                <Moon weight="bold" size={20} />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="space-y-1">
            <DropdownMenuItem onClick={() => toggleTheme("light")}>
              <IconDescription
                title={t("Light")}
                icon={<Sun weight="bold" size={20} />}
              />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleTheme("dark")}>
              <IconDescription
                title={t("Dark")}
                icon={<Moon weight="bold" size={20} />}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
