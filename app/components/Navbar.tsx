"use client";
import React, { useEffect, useState } from "react";
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

const Navbar = ({
  aboutRef,
  timelineRef,
  contactRef,
}: {
  aboutRef?: React.RefObject<HTMLDivElement>;
  timelineRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
}) => {
  const { t } = useTranslation("common");
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [isHomePage, setIsHomePage] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === "/");
    }
  }, []);

  const scrollToSection = (sectionRef?: React.RefObject<HTMLDivElement>) => {
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
        <div className="flex gap-8 items-center border-r-2 pr-6 dark:border-gray-700">
          <Link href="/projects">
            <button className="text-sm font-semibold dark:text-gray-400">
              Projects
            </button>
          </Link>

          {isHomePage ? (
            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </button>
          ) : (
            <Link href="/#about">
              <button className="text-sm font-semibold dark:text-gray-400 max-sm:hidden">
                About
              </button>
            </Link>
          )}

          {isHomePage ? (
            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(timelineRef)}
            >
              Experiences
            </button>
          ) : (
            <Link href="/#timeline">
              <button className="text-sm font-semibold dark:text-gray-400 max-sm:hidden">
                Experiences
              </button>
            </Link>
          )}

          {isHomePage ? (
            <button
              className="text-sm font-semibold dark:text-gray-400 max-sm:hidden"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </button>
          ) : (
            <Link href="/#contact">
              <button className="text-sm font-semibold dark:text-gray-400 max-sm:hidden">
                Contact
              </button>
            </Link>
          )}
        </div>

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
          <DropdownMenuContent align="end">
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
