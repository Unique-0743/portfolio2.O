"use client";

import { NavbarDemo } from "./Navbar";
import { motion } from "motion/react";
import { GridBackground } from "./GridBackground";

export function Hero() {
  return (
    <section id="home">
      <div className="relative flex min-h-[95dvh] w-full flex-col items-center overflow-x-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div>

        {/* Navbar */}
        <NavbarDemo />

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 text-center space-y-6 max-w-screen-xl mx-auto mt-24 sm:mt-28">
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="z-10 max-w-2xl text-base sm:text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 px-2"
          >
            👋, My name is Ravi Shankar
          </motion.p>

          {/* Heading */}
          <h1 className="z-10 max-w-4xl text-3xl font-bold text-slate-700 sm:text-4xl md:text-5xl lg:text-6xl dark:text-slate-300 leading-snug text-center">
            {["Problem Solver", "& Web Developer"].map((line, i) => (
              <div key={i}>
                {line.split(" ").map((word, index) => (
                  <motion.span
                    key={word + index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: (i * 5 + index) * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="z-10 mt-4 flex flex-row justify-center gap-4 sm:gap-6"
          >
            {/* Hire Me Button */}
            <button className="w-full max-w-[150px] md:w-60 transform rounded-lg bg-black px-6 py-3 text-sm md:text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Hire Me
            </button>

           {/* Resume Button (View + Download) */}
<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full max-w-[150px] md:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm md:text-base font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
>
  Resume
</a>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
