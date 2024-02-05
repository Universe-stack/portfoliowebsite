"use client"
import { useState } from "react";
import Image from "next/image";
import dashboard from "../../../public/dashboard.jpg";
import saas from "../../../public/saas.jpg";
import reals from "../../../public/realsScreenshot.png";
import suits from "../../../public/suitsAndVeil.png";
import Link from "next/link";
import TextAnimation from "../components/UI/TextAnimation";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const projects = [
    { image: dashboard, description: "Bookkeeping Software" },
    { image: saas, description: "Custom SaaS App" },
    { image: reals, description: "Custom SaaS App" },
    { image: suits, description: "Suits" },
  ];

  return (
    <section className="flex justify-center align-middle h-[90vh]">
      <div className="self-center flex w-[75%] gap-[1.5rem] p-[1.5rem] h-[100%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[25%] h-[15rem] self-center relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:scale-105"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[100%] h-[100%] overflow-hidden">
              <Image
                src={project.image}
                alt="logo"
                className="self-center contain h-[100%] w-[100%] grayscale hover:pointer"
              />
            </div>
            {hoveredIndex === index && (
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-600 opacity-80 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out opacity-0">
                <p className="text-center">{project.description}</p>
                <span className>
                  
                </span>
              </div>
            )}
            <p className="font-[400] mt-[0.9rem] text-[1rem]">
              {hoveredIndex === index && <TextAnimation text={project.description} />}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
