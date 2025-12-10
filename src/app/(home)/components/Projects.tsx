"use client";

import React, { ReactElement, useState } from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// ---------------- Skeleton Component ----------------
interface SkeletonProps {
  src?: string;
  index: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ src, index }) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
      {src && (
        <img
          key={index}
          src={src}
          alt={`Project ${index + 1}`}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

// ---------------- Image Paths Array ----------------
const imagePaths = [
  "/Smart_Helmet.png",
  "/Skincancer-Detection.png",
  "/Easy_Leave_Management_System.png",
  "/EWMSystem.png",
  "/Highway_lane_changing.png",
];

// ---------------- Projects Data ----------------
interface Project {
  title: string;
  description: string;
  small: string;
  icon: ReactElement;
}

const projectsData: Project[] = [
  {
    title: "Smart Helmet",
    description: `Developed as an IoT-based solution, the Smart Helmet with Alcohol Detection ensures enhanced safety 
for drivers. The helmet is designed to verify whether the driver is wearing it properly and detect alcohol 
consumption. It uses an alcohol sensor to measure the driver's blood alcohol content and an infrared 
sensor to confirm helmet usage. Additionally, the system incorporates accident detection using 
accelerometers to monitor any sudden movements or impacts. All data, including alcohol levels, helmet 
status, and accident alerts, is transmitted in real-time to an IoT platform like Thing Speak, where it is 
visualized for monitoring. In case of an accident or alcohol detection, SOP (Standard Operating 
Procedure) calling is automatically triggered, alerting emergency services for immediate action.`,
    small: "IoT-powered helmet with alcohol detection and accident alert features.",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Skin Cancer Detection (CNN)",
    description: `The project involved developing a machine learning model to detect skin cancer by classifying images as 
either related to skin cancer or not. The model was built using a Convolution Neural Networks (CNN), a 
deep learning technique ideal for image classification tasks. The system was trained using a labeled 
dataset consisting of images of skin lesions, which allowed the model to learn the patterns associated 
with skin cancer. After training, the model's performance was evaluated based on accuracy, ensuring its 
ability to make reliable predictions. This machine learning-based approach offers a promising solution 
for early diagnosis, helping healthcare professionals identify potential skin cancer cases more efficiently.`,
    small: "Deep learning model using CNNs to classify skin lesion images.",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Easy Leave Management System",
    description: `Easy Leave Management is a web-based platform that simplifies leave request and 
approval processes. Employees can easily apply for leave, managers can review and 
approve requests, and HR can track leave balances and generate reports. The 
system ensures real-time notifications, transparent workflows, and accurate 
record-keeping, making leave management efficient and hassle-free for 
organizations.`,
    small: "A web-based platform for managing employee/student leave applications.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "E-Waste Management System",
    description: `The E-waste management system is an IoT-enabled system designed to streamline e-waste collection. It uses 
an ultrasonic sensor to monitor bin fill levels and a load cell to measure waste weight, with data processed by 
an ESP32 microcontroller. The system transmits real-time updates to a web dashboard via Wi-Fi, enabling 
efficient waste management and timely collection. This innovative solution promotes eco-friendly disposal 
practices and reduces operational costs, making it ideal for schools, offices, and public spaces.`,
    small: "Smart bins with sensors to detect fill levels and metals.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Highway Lane Changing (RL)",
    description: `The model was trained to make optimal lane-changing decisions on highways using reinforcement learning 
techniques. By analyzing various traffic conditions, such as vehicle proximity and speed, the system learned to 
select the most appropriate lane to reduce congestion and minimize the risk of accidents. The project focused 
on improving traffic flow and safety through intelligent decision-making, demonstrating its potential 
application in autonomous driving systems.`,
    small: "Reinforcement learning model for safe lane changing.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];

// ---------------- Projects Component ----------------
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="mt-39 scroll-mt-24 relative">
      <h1 className="flex items-center justify-center text-6xl pb-9">Projects</h1>

      {/* Grid */}
      <BentoGrid className="max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[18rem] sm:auto-rows-[14rem] gap-4">
        {projectsData.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(item)}
            className="contents cursor-pointer"
          >
            <BentoGridItem
              title={item.title}
              description={item.small}
              header={<Skeleton src={imagePaths[i]} index={i} />}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </div>
        ))}
      </BentoGrid>

      {/* Pop-up Card */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-black rounded-2xl p-6 max-w-2xl w-full shadow-xl relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              {selectedProject.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
