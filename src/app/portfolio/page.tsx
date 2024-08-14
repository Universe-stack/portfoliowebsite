"use client"
import { useState } from "react";
import Image from "next/image";
import fig1 from "../../../public/proplabs.png";
import fig2 from "../../../public/createcamplogo.png";
import fig3 from "../../../public/shiptoday_1.png";
import fig4 from "../../../public/fig4.jpg";


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
    { image: fig2, description: "Online Marketplace for creator resources",link:"https://proplabs.vercel.app" },
    { image: fig3, description: "Next Js boilerplate for SAAS apps", link:"https://proplabs.vercel.app" },
    { image: fig4, description: "Suits" },
  ];

  return (
    <section className="flex justify-center align-middle lg:h-[90vh]">
      <div className="self-center flex xsm:flex-col lg:flex-row lg:w-[75%] xsm:w-[100%] lg:gap-[1.5rem] xsm:gap-[4rem] p-[1.5rem] lg:h-[100%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:w-[25%] xsm:w-[80%] h-[15rem] self-center relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:scale-105"
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
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gray-600 opacity-80 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out text-center">
                <span className="mt-2">
                  <a href={`${project.link}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                    </svg>
                  </a>
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
