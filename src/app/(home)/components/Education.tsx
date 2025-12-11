"use client";
import React from "react";

export default function Education() {
  const educationData = [
    {
      level: "10th",
      institution: "Ravindra Bharathi Public School",
      board: "SSC",
      duration: "2018-2019",
      score: "9.7 CGPA",
    },
    {
      level: "Intermediate",
      institution: "NARAYANA JUNIOR COLLEGE",
      board: "Board of Intermediate Education",
      duration: "2019-2021",
      score: "95.7%",
    },
    {
      level: "Bachelor’s",
      institution: "VIT-AP UNIVERSITY",
      board: "VIT-AP UNIVERSITY",
      duration: "2021-2025",
      score: "8.65 CGPA",
    },
  ];

  return (
    <section id="education" className="mt-30 scroll-mt-24 px-4 sm:px-6">
      <h1 className="text-center text-4xl sm:text-6xl font-bold mb-10 sm:mb-12">
        Education
      </h1>

      {/* Scroll container for mobile */}
      <div className="max-w-6xl mx-auto overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full min-w-[650px] sm:min-w-0 border-collapse">
          {/* HEADER */}
          <thead>
            <tr className="bg-neutral-900 text-white text-center text-sm sm:text-base">
              <th className="px-3 sm:px-4 py-3">Qualification</th>
              <th className="px-3 sm:px-4 py-3">Institution</th>
              <th className="px-3 sm:px-4 py-3">Board / University</th>
              <th className="px-3 sm:px-4 py-3">Duration</th>
              <th className="px-3 sm:px-4 py-3">Score</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {educationData.map((edu, index) => (
              <tr
                key={index}
                className="bg-white text-black hover:bg-gray-100 transition text-xs sm:text-base"
              >
                <td className="px-2 sm:px-4 py-3 text-center font-semibold">
                  {edu.level}
                </td>
                <td className="px-2 sm:px-4 py-3 text-center font-bold break-words">
                  {edu.institution}
                </td>
                <td className="px-2 sm:px-4 py-3 text-center font-bold break-words">
                  {edu.board}
                </td>
                <td className="px-2 sm:px-4 py-3 text-center font-semibold">
                  {edu.duration}
                </td>
                <td className="px-2 sm:px-4 py-3 text-center font-semibold">
                  {edu.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
