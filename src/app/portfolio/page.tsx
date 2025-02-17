"use client"
import { useState } from "react";
import Image from "next/image";
import fig1 from "../../../public/proplabs.png";
import fig2 from "../../../public/createcamplogo.png";
import fig3 from "../../../public/shiptoday_1.png";
import fig4 from "../../../public/Logo-01-03.jpg";
import fig5 from "../../../public/Emba logo blue 1.png";


import Link from "next/link";
import TextAnimation from "../components/UI/TextAnimation";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index:any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const projects = [
    { image: fig1, description: "Software Development Agency website",link:"https://proplabs.vercel.app" },
    { image: fig4, description: "Spay Luxury- End to end Ecommerce store for Male fashion brand", link:"https://spayluxury.vercel.app" },
    { image: fig2, description: "Online Marketplace for creator resources",link:"https://createcamp.vercel.app" },
    { image: fig3, description: "Next Js boilerplate for SAAS apps", link:"https://github.com/Universe-stack/quickTailor" },
    { image: fig5, description: "Waitlist for Business educational LMS startup", link:"https://emba.vercel.app" }
   
  ];

  return (
    <section className="flex justify-center align-middle lg:h-[90vh]">
      <div className="self-center grid grid-cols-4 justify-center items-center xsm:grid-cols-1 lg:grid-cols-4 lg:w-[75%] xsm:w-[100%] lg:gap-x-[1.5rem] lg:gap-y-0 xsm:gap-[4rem] p-[1.5rem] lg:h-[100%] ">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" self-center bg-white lg:w-[100%] xsm:w-[80%] h-[15rem] relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:scale-105  border-[0.5rem] border-[#121212]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[100%] h-[100%] overflow-hidden flex justify-center">
              <Image
                src={project.image}
                alt="logo"
                className="self-center contain  hover:pointer"
              />
            </div>
            {hoveredIndex === index && (
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-600 opacity-80 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out text-center">
                <span className="mt-2">
                  <a href={`${project.link}`}>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4h6v6m0-6L10 14"/>
                  </svg>
                  </a>
                </span>
              </div>
            )}
            <p className="font-[400] mt-[0.9rem] text-[0.85rem] text-left ">
              {hoveredIndex === index && <TextAnimation text={project.description} />}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
