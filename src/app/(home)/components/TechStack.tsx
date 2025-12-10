import React from "react";

const techLogos = [
  "html", "css", "tailwindcss", "react", "javascript",
  "nodedotjs", "next", "express", "figma", "python"
];

export function TechStack() {
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
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 mt-6">
            {techLogos.map((tech, index) => (
              <img
                key={index}
                src={`/${tech}.svg`}
                alt={tech}
                className="h-8 sm:h-10 md:h-12 w-auto mx-2 sm:mx-4 md:mx-6 filter invert brightness-125 transition-transform duration-300 hover:scale-110"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
