"use client";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState,useEffect } from "react";
import { cn } from "@/lib/utils";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [activeLink, setActiveLink] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const sections = links.map((link) => document.getElementById(link.id));

  const onScroll = () => {
    const scrollPosition = window.scrollY + 150;

    for (const section of sections) {
      if (!section) continue;

      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (
        id &&
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        setActiveLink(id);
        break;
      }
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "techstack", label: "TechStack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-10 z-50",
        "w-full md:w-auto", // full width on mobile, auto width on desktop
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between md:justify-center",
          "bg-white dark:bg-black border dark:border-white/20 shadow-lg rounded-full",
          "px-4 py-2 md:px-6 md:py-2"
        )}
      >
        {/* Hamburger Icon on Mobile */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.id)}
              className="px-2 py-0.5 rounded-md transition whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(145deg, #d4af37 0%, #c99700 25%, #b8860b 50%, #c99700 75%, #d4af37 100%)",
                boxShadow:
                  "inset 0 2px 6px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.6)",
                fontWeight: "bold",
                color: activeLink === link.id ? "#000000" : "#fff8dc",
                textShadow: activeLink === link.id ? "none" : "1px 1px 2px #000",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons on Mobile */}
        <div className="absolute right-4 md:hidden flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-2xl hover:text-gray-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-2xl hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-2 px-4 md:hidden bg-white dark:bg-black border dark:border-white/20 rounded-xl shadow-lg py-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveLink(link.id);
                setMenuOpen(false);
              }}
              className="px-2 py-0.5 rounded-md transition whitespace-nowrap text-center"
              style={{
                background:
                  "linear-gradient(145deg, #d4af37 0%, #c99700 25%, #b8860b 50%, #c99700 75%, #d4af37 100%)",
                boxShadow:
                  "inset 0 2px 6px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.6)",
                fontWeight: "bold",
                color: activeLink === link.id ? "#000000" : "#fff8dc",
                textShadow: activeLink === link.id ? "none" : "1px 1px 2px #000",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
