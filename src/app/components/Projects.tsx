import Image from "next/image";
import Link from "next/link";
import SlitBar from "./SlitBar";

type ProjectBlock = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  flip?: boolean;
};

const projects: ProjectBlock[] = [
  {
    eyebrow: "Browse AI",
    title: "AI powered web assistant",
    description:
      "Browse AI is an AI web assistant chrome extension built to make generative AI usable directly inside the browser.",
    ctaLabel: "Learn More",
    ctaHref: "/portfolio/browse-ai",
    image: "/Browseai gemini.png",
  },
  {
    eyebrow: "Spay Luxury",
    title: "Ecommerce store for mens fashion brand",
    description:
      "Spay luxury is a mens fashion store built with Next Js that makes over 5 million naira in sales per annum",
    ctaLabel: "Learn More",
    ctaHref: "/portfolio/spay-luxury",
    image: "/spay gemini.png",
    flip: true,
  },
  {
    eyebrow: "Pickups",
    title: "Food delivery and tracking app",
    description:
      "Pickups is a react-native built food delivery app",
    ctaLabel: "Learn More",
    ctaHref: "/portfolio/pickups",
    image: "/pickups gem.png",
    flip: false,
  },
];

export default function Projects() {
  return (
    <section className="bg-white text-[#111]">
      <SlitBar />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 space-y-14 sm:space-y-16 lg:space-y-20">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch ${
              project.flip ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Block */}
            <div
              className="bg-[#dddcdc] rounded-[26px] shadow-[0_14px_50px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5 lg:flex-[1.5]"
            >
              <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#4a4a4a]">{project.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] font-semibold text-[#0f0f0f]">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-[#3f3f3f] leading-relaxed">{project.description}</p>
              <Link href={project.ctaHref} className="inline-flex w-fit items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base font-semibold rounded-md shadow-[0_8px_18px_rgba(0,0,0,0.18] hover:bg-[#111] transition-colors">
                {project.ctaLabel}
              </Link>
            </div>

            {/* Image Block */}
            <div
              className="relative rounded-[26px] overflow-hidden min-h-[400px] sm:min-h-[480px] lg:min-h-[600px] bg-[#000000] lg:flex-1"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain h-[5rem] rounded-lg "
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}