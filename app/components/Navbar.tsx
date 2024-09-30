"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Command, Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import IconDescription from "./IconDescription";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load the saved theme from localStorage and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
    }
  }, []);

  // Function to toggle between light and dark themes
  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Automatically add/remove the dark class based on the new theme
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <header className="bg-white bg-opacity-80 dark:bg-gray-900 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-lg saturate-100 backdrop-blur-[10px] transition-colors">
      <Image alt="navbar-logo" src="/icons/logo.png" width={40} height={40} />
      <div className="flex gap-0 items-center">
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
                title="Light"
                icon={<Sun weight="bold" size={20} />}
              />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleTheme("dark")}>
              <IconDescription
                title="Dark"
                icon={<Moon weight="bold" size={20} />}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Command Button */}
        <Button variant="ghost">
          <Command weight="bold" size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
