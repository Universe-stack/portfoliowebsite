'use client'
import Image from "next/image";
import fig1 from "../../../public/proplabs.png";
import fig2 from "../../../public/createcamplogo.png";
import fig3 from "../../../public/shiptoday_1.png";
import fig4 from "../../../public/Logo-01-03.jpg";
import fig5 from "../../../public/Emba logo blue 1.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: any;
  link: string;
  badge: string;
  bg: string;
  textColor?: string;
  buttonBg?: string;
  buttonText?: string;
  badgeBg?: string;
  badgeText?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "PropLabs",
    description: "Software Development Agency website",
    image: fig1,
    link: "https://proplabs.vercel.app",
    badge: "Web Development",
    bg: "linear-gradient(135deg, #f8f9fc 0%, #f0f2f8 100%)",
    textColor: "#1a1a1a",
    buttonBg: "#212529",
    buttonText: "#ffffff",
    badgeBg: "rgba(33,37,41,0.08)",
    badgeText: "#495057",
  },
  {
    id: 2,
    title: "Spay Luxury",
    description: "End to end Ecommerce store for Male fashion brand",
    image: fig4,
    link: "https://spayluxury.vercel.app",
    badge: "E-Commerce",
    bg: "linear-gradient(135deg, #fefcfb 0%, #fdf8f6 100%)",
    textColor: "#1a1a1a",
    buttonBg: "#343a40",
    buttonText: "#ffffff",
    badgeBg: "rgba(52,58,64,0.08)",
    badgeText: "#495057",
  },
  {
    id: 3,
    title: "CreateCamp",
    description: "Online Marketplace for creator resources",
    image: fig2,
    link: "https://createcamp.vercel.app",
    badge: "Marketplace",
    bg: "linear-gradient(135deg, #f7fbfc 0%, #f2f7f9 100%)",
    textColor: "#1a1a1a",
    buttonBg: "#495057",
    buttonText: "#ffffff",
    badgeBg: "rgba(73,80,87,0.08)",
    badgeText: "#495057",
  },
  {
    id: 4,
    title: "Ship Today",
    description: "Next Js boilerplate for SAAS apps",
    image: fig3,
    link: "https://github.com/Universe-stack/quickTailor",
    badge: "Open Source",
    bg: "linear-gradient(135deg, #f8fcf9 0%, #f3f8f5 100%)",
    textColor: "#1a1a1a",
    buttonBg: "#212529",
    buttonText: "#ffffff",
    badgeBg: "rgba(33,37,41,0.08)",
    badgeText: "#495057",
  },
  {
    id: 5,
    title: "Emba",
    description: "Waitlist for Business educational LMS startup",
    image: fig5,
    link: "https://emba.vercel.app",
    badge: "EdTech",
    bg: "linear-gradient(135deg, #fffcf8 0%, #fdf9f4 100%)",
    textColor: "#1a1a1a",
    buttonBg: "#343a40",
    buttonText: "#ffffff",
    badgeBg: "rgba(52,58,64,0.08)",
    badgeText: "#495057",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const textColor = project.textColor ?? "#1a1a1a";
  const buttonBg = project.buttonBg ?? textColor;
  const buttonText = project.buttonText ?? "#ffffff";
  const badgeBg = project.badgeBg ?? "rgba(0,0,0,0.08)";
  const badgeText = project.badgeText ?? "#495057";

  return (
    <article
      className="group relative overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] min-h-[450px] sm:min-h-[500px] transition-all duration-400 ease-out hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:scale-[1.01] hover:-translate-y-1 bg-white"
      style={{ color: textColor }}
    >
      <div className="absolute inset-0" style={{ background: project.bg }} />
      <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.95),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.6),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(125deg,transparent_0%,rgba(255,255,255,0.4)_40%,transparent_70%)]" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-10 sm:p-12">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex items-center rounded-full px-4 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase backdrop-blur-sm transition-all duration-300"
            style={{ backgroundColor: badgeBg, color: badgeText }}
          >
            {project.badge}
          </span>
        </div>

        <div className="space-y-5 max-w-md pb-2">
          <h3 className="text-[28px] sm:text-[32px] font-bold leading-[1.15] tracking-tight" style={{ color: textColor }}>
            {project.title}
          </h3>
          <p className="text-[15px] sm:text-base leading-[1.6] opacity-75 max-w-[360px]" style={{ color: textColor }}>
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[13px] font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:translate-x-0.5"
            style={{ backgroundColor: buttonBg, color: buttonText }}
          >
            View Project
            <svg className="transition-transform duration-300 group-hover:translate-x-0.5" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 4h6v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 z-20 w-[130px] h-[130px] sm:w-[150px] sm:h-[150px]">
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out cursor-pointer group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] border-[3px] border-white/80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-50" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 130px, 150px"
          />
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-[#ececec] text-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">
        <div className="space-y-4 mb-16">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">Portfolio</p>
          <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900">
            Featured Projects
          </h1>
          <p className="text-[15px] sm:text-base text-gray-600 max-w-2xl leading-[1.7]">
            A focused selection of web apps, e-commerce platforms, and open-source work that shows how I think, build, and ship end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
