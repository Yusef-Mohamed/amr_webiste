"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Curve from "./Curve";
import NavItem from "./NavItem";
import { IoMdClose } from "react-icons/io";
import dynamic from "next/dynamic";
const ThemeChanger = dynamic(() => import("../ThemeChanger"), {
  ssr: false,
});
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    {
      name: "Portfolio",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Company",
      link: "/",
    },
  ];
  return (
    <header className="bg-mainBg border-b border-b-shadow sticky top-0 z-40">
      <div className="container py-4 flex justify-between">
        <Link href={"/"}>
          <Image
            alt="logo"
            className="translate-y-1"
            src="/logo.svg"
            width={40}
            height={30}
          />
        </Link>
        <nav className="hidden lg:flex  items-center gap-4">
          {links.map((link, indx) => (
            <Link
              key={indx}
              href={link.link}
              className="font-semibold hover:text-primary text-lg transition-all"
            >
              {link.name}
            </Link>
          ))}

          <ThemeChanger />
        </nav>
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className="flex lg:hidden  items-center justify-center w-12 h-12 bg-fade rounded-full text-mainBg text-xl hover:scale-105 hover:bg-primary "
        >
          <FaBars />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ x: "calc(100% + 100px)" }}
              animate={{
                x: "0",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              }}
              exit={{
                x: "calc(100% + 100px)",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              }}
              className="fixed h-screen right-0 top-0"
            >
              <div className="p-24 h-full min-w-[300px] md:min-w-[350px] py-20 bg-shadow  flex-col flex">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="absolute top-8 right-8 flex items-center justify-center w-12 h-12 bg-fade rounded-full text-mainBg text-xl hover:scale-105 hover:bg-primary "
                >
                  <IoMdClose />
                </button>
                {links.map((link, indx) => (
                  <NavItem index={indx + 1} key={indx + links.length}>
                    <Link
                      href={link.link}
                      className="font-semibold hover:text-primary text-xl  block py-4 -translate-x-4 hover:translate-x-0 transition-all"
                    >
                      {link.name}
                    </Link>
                  </NavItem>
                ))}
                <NavItem index={links.length + 2}>
                  <ThemeChanger />
                </NavItem>
              </div>
              <Curve />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
