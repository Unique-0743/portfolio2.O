import React from "react";

export function TechStack() {
  // Mobile layout ONLY
  const mobileLayout = [
    ["html", "css", "tailwindcss", "react"],     // Row 1
    ["javascript", "express", "mongodb"],        // Row 2
    ["next", "python"],                          // Row 3
  ];

  // Original flat list for desktop (unchanged)
  const allTechs = [
    "html",
    "css",
    "tailwindcss",
    "react",
    "javascript",
    "nodedotjs",
    "next",
    "express",
    "figma",
    "python",
  ];

  return (
    <section id="techstack" className="mt-30 scroll-mt-24">
      <h1 className="flex items-center justify-center text-6xl pb-9">
        My Tech Stack
      </h1>

      <div
        className="max-w-[800px] mx-auto py-16 px-8 rounded-[25px]"
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

        {/* ---------------- Laptop / Desktop View (unchanged) ---------------- */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-8">
          {allTechs.map((tech, index) => (
            <img
              key={index}
              src={`/${tech}.svg`}
              alt={tech}
              className="h-12 w-auto mx-4 filter invert brightness-125 transition-transform duration-300 hover:scale-110"
              draggable={false}
            />
          ))}
        </div>

        {/* ---------------- Mobile View (custom 3-row layout) ---------------- */}
        <div className="flex sm:hidden flex-col items-center gap-8">
          {mobileLayout.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex justify-center gap-6 flex-wrap"
            >
              {row.map((tech, techIdx) => (
                <img
                  key={techIdx}
                  src={`/${tech}.svg`}
                  alt={tech}
                  className="h-10 w-auto filter invert brightness-125 transition-transform duration-300 hover:scale-110"
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
