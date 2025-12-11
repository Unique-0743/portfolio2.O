import React from "react";

const techLogos = [
  "html", "css", "tailwindcss", "react", "javascript",
  "nodedotjs", "next", "express", "figma", "python"
];

export function TechStack() {
  return (
    <section id="techstack" className="mt-30 scroll-mt-24 px-4">
      <h1 className="flex items-center justify-center text-4xl sm:text-6xl pb-9 font-bold">
        My Tech Stack
      </h1>

      <div
        className="max-w-[800px] mx-auto py-10 sm:py-16 px-5 sm:px-8 rounded-[25px]"
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
        {/* RESPONSIVE GRID (Perfect Alignment) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 place-items-center">
          {techLogos.map((tech, index) => (
            <img
              key={index}
              src={`/${tech}.svg`}
              alt={tech}
              className="
                h-10 w-10 
                sm:h-12 sm:w-12 
                md:h-14 md:w-14 
                filter invert brightness-125 
                transition-transform duration-300 
                hover:scale-110
              "
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
