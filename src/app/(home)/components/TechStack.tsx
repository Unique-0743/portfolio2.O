import React from "react";

const techLogos = [
  "html", "css", "tailwindcss", "react", "javascript",
  "nodedotjs", "next", "express", "figma", "python"
];

// Laptop / Desktop layout (exact arrangement you showed)
const laptopLayout = [
  ["html", "css", "tailwindcss", "react", "javascript"],
  ["nodedotjs", "next", "express"],
  ["figma", "python"]
];

// Mobile layout (your custom arrangement)
const mobileLayout = [
  ["html", "css", "tailwindcss", "react"],
  ["javascript", "express", "nodedotjs"],
  ["next", "python"]
];

export function TechStack() {
  return (
    <section id="techstack" className="mt-30 scroll-mt-24 px-4">
      <h1 className="flex items-center justify-center text-4xl sm:text-6xl pb-9 font-bold">
        My Tech Stack
      </h1>

      {/* ---------- GOLDEN BORDER CONTAINER ---------- */}
      <div
        className="max-w-[800px] mx-auto py-12 sm:py-16 px-5 sm:px-8 rounded-[25px] flex flex-col items-center justify-center"
        style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          background: `
            linear-gradient(#1f2937, #1f2937) padding-box,
            linear-gradient(145deg, #d4af37, #c99700, #b8860b, #c99700, #d4af37) border-box
          `,
          backgroundClip: "padding-box, border-box",
        }}
      >

        {/* ---------- DESKTOP / LAPTOP VIEW ---------- */}
        <div className="hidden sm:flex flex-col items-center justify-center gap-10">
          {laptopLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-12 justify-center">
              {row.map((tech, techIndex) => (
                <img
                  key={techIndex}
                  src={`/${tech}.svg`}
                  alt={tech}
                  className="
                    h-12 w-12 
                    md:h-16 md:w-16
                    filter invert brightness-125 
                    transition-transform duration-300 
                    hover:scale-110
                  "
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>

        {/* ---------- MOBILE VIEW ---------- */}
        <div className="sm:hidden flex flex-col gap-8">
          {mobileLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-6 flex-wrap">
              {row.map((tech, techIndex) => (
                <img
                  key={techIndex}
                  src={`/${tech}.svg`}
                  alt={tech}
                  className="
                    h-10 w-10 
                    filter invert brightness-125 
                    transition-transform duration-300 
                    hover:scale-110
                  "
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
