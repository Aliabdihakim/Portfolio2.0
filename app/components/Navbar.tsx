import Image from "next/image";
import { Command, Sun } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  return (
    <header className="bg-white bg-opacity-80 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-lg saturate-100 backdrop-blur-[10px] transition-colors">
      <Image alt="navbar-logo" src="/icons/logo.png" width={40} height={40} />
      <div className="flex gap-4 items-center">
        <Sun weight="bold" size={20} />
        <Command weight="bold" size={20} />
      </div>
    </header>
  );
};

export default Navbar;
