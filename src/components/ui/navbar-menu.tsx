"use client";
import { HiMenu, HiX } from "react-icons/hi";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-8" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [activeLink, setActiveLink] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  const links = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "techstack", label: "TechStack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <nav className={cn("fixed top-10 z-50 w-full px-4", className)}>
      <div className="flex items-center justify-between bg-white dark:bg-black border dark:border-white/20 shadow-lg rounded-full px-4 py-2">
        {/* Logo or Brand */}
        <div className="font-bold text-xl text-black dark:text-white">Ravi Shankar</div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-4">
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
                  "inset 0 2px 6px rgba(255, 255, 255, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)",
                fontWeight: "bold",
                color: activeLink === link.id ? "#000000" : "#fff8dc",
                textShadow: activeLink === link.id ? "none" : "1px 1px 2px #000",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/90 backdrop-blur-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveLink(link.id);
                setMenuOpen(false);
              }}
              className="px-6 py-3 rounded-lg font-bold text-2xl text-white bg-gradient-to-r from-yellow-500 to-orange-500 text-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
