import Image from "next/image";
import Link from "next/link";
import { Publication, publicationCards } from "../data/publications";
import SlitBar from "./SlitBar";

type PublicationCardProps = {
  publication: Publication;
  priority?: boolean;
  variant?: "featured" | "grid";
};

export function PublicationCard({ publication, priority, variant = "featured" }: PublicationCardProps) {
  const textColor = publication.textColor ?? "#0f0f0f";
  const buttonBg = publication.buttonBg ?? textColor;
  const buttonText = publication.buttonText ?? "#ffffff";
  const badgeBg = publication.badgeBg ?? "rgba(255,255,255,0.18)";
  const badgeText = publication.badgeText ?? textColor;
  const height = variant === "featured" ? "min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]" : "min-h-[280px] sm:min-h-[320px]";

  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] shadow-[0_18px_55px_rgba(0,0,0,0.12)] ${height}`}
      style={{ color: textColor }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: publication.bg }} />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.55),transparent_30%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase"
            style={{ backgroundColor: badgeBg, color: badgeText }}
          >
            {publication.badge}
          </span>
          {publication.chips && publication.chips.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold">
              {publication.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full px-3 py-1 bg-black/10 text-black/70"
                  style={{ color: textColor, backgroundColor: "rgba(0,0,0,0.08)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-xl">
          <h3 className={`${variant === "grid" ? "text-xl sm:text-[22px] lg:text-[24px]" : "text-2xl sm:text-[28px] lg:text-[32px]"} font-semibold leading-[1.1]`} style={{ color: textColor }}>
            {publication.title}
          </h3>
          <p className={`${variant === "grid" ? "text-xs sm:text-sm max-w-[280px]" : "text-sm sm:text-base max-w-[320px]"} leading-relaxed opacity-90 `} style={{ color: textColor }}>
            {publication.summary}
          </p>
          {publication.link ? (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex w-fit items-center gap-2 rounded-full ${variant === "grid" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"} font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition duration-200 hover:opacity-90`}
              style={{ backgroundColor: buttonBg, color: buttonText }}
            >
              {publication.cta}
            </a>
          ) : (
            <Link
              href="/publications"
              className={`inline-flex w-fit items-center gap-2 rounded-full ${variant === "grid" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"} font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition duration-200`}
              style={{ backgroundColor: buttonBg, color: buttonText }}
            >
              {publication.cta}
            </Link>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
          {publication.chips?.map((chip) => (
            <span key={chip} className="rounded-full px-3 py-1 text-xs font-semibold bg-black/10" style={{ color: textColor }}>
              {chip}
            </span>
          ))}
        </div>

        <div
          className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 ${
            variant === "featured" ? "w-[46%] sm:w-[42%] lg:w-[38%]" : "w-[34%] sm:w-[30%]"
          }`}
        >
          <div className="relative w-full aspect-[5/4] drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
              priority={priority}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedPublications() {
  const featured = publicationCards.slice(0, 4);

  return (
    <section className="bg-white text-[#0f0f0f]">
        <SlitBar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-14 space-y-8 sm:space-y-10 lg:space-y-12">
        <div className="flex flex-col sm:items-center text-center justify-center gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-500">Featured</p>
            <h2 className="text-3xl sm:text-[34px] lg:text-[38px] font-semibold leading-[1.1]">Publications</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              I publish practical essays and case studies across
Product, Engineering, AI, Startups
            </p>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center justify-center rounded-full bg-[#0f0f0f] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] hover:bg-[#1a1a1a] transition-colors"
          >
            See more
          </Link>
        </div>

        <div className="grid gap-6 sm:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {featured.map((publication, idx) => (
            <PublicationCard key={publication.id} publication={publication} priority={idx === 0} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}
