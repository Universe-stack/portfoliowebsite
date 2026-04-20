import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudy = {
  id: string;
  number: string;
  title: string;
  summary: string;
  liveUrl?: string;
  heroImage: string;
  overview: {
    role: string;
    timeline: string;
    productType: string;
    team: string;
  };
  problem: string;
  insights: string;
  approach: string;
  solution: string;
  outcome: string;
  reflection: string;
};

const caseStudies: Record<string, CaseStudy> = {
  "browse-ai": {
    id: "browse-ai",
    number: "01.",
    title: "Browse AI",
    summary: "A browser extension that extracts page content and uses Gemini to answer with context-aware, relevant responses.",
    liveUrl: "https://usebrowseai.vercel.app",
    heroImage: "/Browseai gemini.png",
    overview: {
      role: "Technical Product Manager + Product Engineer",
      timeline: "6 weeks",
      productType: "Chrome extension + web app",
      team: "Led end-to-end with advisor support",
    },
    problem:
      "People jump between tabs and tools when trying to summarize, extract, or rewrite web content. That context switching causes delay and cognitive load.",
    insights:
      "Writers, researchers, and students wanted AI help inside the page they were already reading. The key need was not just answers, but speed and continuity of flow.",
    approach:
      "As TPM and product engineer, I defined the product scope, prioritized the highest-leverage user flows, and translated them into a lightweight RAG architecture that extracts page context, ranks relevance, and packages prompt + conversation history for Gemini.",
    solution:
      "I shipped a click-to-open browser extension popup (not a sidebar) using Tesseract.js and a JavaScript scraping library to extract active-page content, then routed relevant context plus user prompts and conversation state into the Gemini API for grounded answers.",
    outcome:
      "The product made common reading and writing tasks meaningfully faster, and users reported lower effort because they no longer had to switch between multiple AI tabs.",
    reflection:
      "The biggest learning was balancing flexibility with focus. Next iteration, I would add stronger memory controls and personalization for repeated workflows.",
  },
  "spay-luxury": {
    id: "spay-luxury",
    number: "02.",
    title: "Spay Luxury",
    summary: "An end-to-end ecommerce experience for a menswear brand focused on conversion and trust.",
    liveUrl: "https://spayluxury.com",
    heroImage: "/spay gemini.png",
    overview: {
      role: "Technical Product Manager + Product Engineer",
      timeline: "8 weeks",
      productType: "Ecommerce storefront",
      team: "Worked directly with founder as product + engineering lead",
    },
    problem:
      "The brand had demand but lacked a high-confidence buying journey. Product discovery, checkout clarity, and visual trust signals were not strong enough.",
    insights:
      "Shoppers cared about confidence before purchase: clear sizing, quality cues, and seamless checkout. Returning users also wanted a faster path to repeat buys.",
    approach:
      "As TPM and product engineer, I mapped the ecommerce funnel, prioritized conversion bottlenecks, and sequenced execution from catalog UX to checkout reliability with measurable business impact in mind.",
    solution:
      "I built and launched a Next.js ecommerce storefront with optimized product discovery, streamlined cart/checkout interactions, and a premium brand system that increased trust and purchase intent.",
    outcome:
      "The store improved purchase confidence and sustained annual revenue growth, while giving the team a stable platform for launches and campaigns.",
    reflection:
      "Strong visual identity helps, but operational UX wins sales. Next, I would instrument deeper analytics around drop-off moments to optimize conversion further.",
  },
  pickups: {
    id: "pickups",
    number: "03.",
    title: "Pickups",
    summary: "A delivery and tracking app that simplifies ordering and gives users confidence with live status visibility.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sparkmedia.pickups",
    heroImage: "/pickups gem.png",
    overview: {
      role: "Technical Product Manager + Product Engineer",
      timeline: "8 weeks",
      productType: "Mobile delivery app",
      team: "Cross-functional squad: led product direction and implementation priorities",
    },
    problem:
      "Food delivery users experienced uncertainty after checkout, while dispatch teams lacked clear state transitions that kept customers informed.",
    insights:
      "Users wanted certainty at each stage: accepted, preparing, in transit, and delivered. They also needed easy issue reporting without leaving the order flow.",
    approach:
      "As TPM and product engineer, I broke the order journey into decision-critical moments, defined state transitions, and prioritized status clarity and support pathways to reduce user uncertainty.",
    solution:
      "I delivered a mobile product flow with clearer order-state modeling, stronger live-tracking communication, and integrated support actions directly in the tracking experience.",
    outcome:
      "The experience reduced confusion and support dependency, while creating a more transparent journey from order placement to delivery.",
    reflection:
      "Status language impacts trust more than expected. Next, I would validate microcopy per city/market to improve clarity for diverse user groups.",
  },
};

const contentSections = [
  { key: "problem", label: "Problem" },
  { key: "insights", label: "Users / Insights" },
  { key: "approach", label: "Approach" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
  { key: "reflection", label: "Reflection" },
] as const;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((projectname) => ({ projectname }));
}

type Params = {
  projectname: string;
};

export default function PortfolioCaseStudyPage({ params }: { params: Params }) {
  const project = caseStudies[params.projectname];

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-[#e6e6e6] text-[#0f0f0f]">
      <div className="mx-auto max-w-[1220px] px-3 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4f4f4f]">Portfolio Case Study</p>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#1e1e1e] bg-[#1e1e1e] text-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] hover:bg-black transition-colors"
              >
                Visit Live App
              </Link>
            )}
            <Link
              href="/portfolio"
              className="inline-flex items-center border border-[#1e1e1e] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] hover:bg-[#1e1e1e] hover:text-white transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="bg-[#efefef] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.78fr_1.55fr] lg:gap-7">
            <article className="bg-[#efefef] px-2 py-2 sm:px-4 sm:py-4">
              <p className="mb-8 text-[52px] font-bold leading-[0.85] tracking-tight sm:text-[84px]">{project.number}</p>
              <h1 className="text-[28px] font-semibold leading-[1.03] tracking-tight sm:text-[40px]">{project.title}</h1>
              <p className="mt-3 max-w-[28ch] text-[12px] leading-relaxed text-[#333] sm:text-[13px]">{project.summary}</p>
            </article>

            <article className="relative min-h-[280px] overflow-hidden bg-[#1a1a1a] sm:min-h-[380px] lg:min-h-[460px]">
              <Image
                src={project.heroImage}
                alt={`${project.title} hero visual`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 72vw"
              />
            </article>
          </div>

        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[0.92fr_1.45fr] lg:gap-6">
          <article className="bg-white p-6 sm:p-8 h-fit">
            <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
            <dl className="mt-5 space-y-4 text-sm text-[#343434]">
              <div>
                <dt className="font-semibold text-[#111]">Role</dt>
                <dd>{project.overview.role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#111]">Timeline</dt>
                <dd>{project.overview.timeline}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#111]">Product type</dt>
                <dd>{project.overview.productType}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#111]">Team</dt>
                <dd>{project.overview.team}</dd>
              </div>
            </dl>
          </article>

          <div className="space-y-4">
            {contentSections.map((section) => (
              <article
                key={section.key}
                className="bg-white p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight">{section.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#393939] sm:text-[15px]">
                  {project[section.key]}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}