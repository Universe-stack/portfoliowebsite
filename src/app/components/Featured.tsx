import Image from "next/image";
import Link from "next/link";
import SlitBar from "./SlitBar";

const FEATURED_BG =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80";

export default function Featured() {
  return (
    <section className="bg-white text-white min-h-screen">
      <SlitBar />

      <div className="px-4 sm:px-6 lg:px-12 pb-8 sm:pb-8 lg:pb-8 pt-0 sm:pt-0 lg:pt-0">
        <div className="relative max-w-8xl mx-auto overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] bg-black min-h-[520px] sm:min-h-[580px]">
          <div className="absolute inset-0">
            <Image
              src="/Gitex 1.png"
              alt="Featured project background"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />
          </div>

          <div className="relative z-10 flex h-full items-center">
            <div className="px-6 sm:px-10 md:px-12 lg:px-14 py-10 sm:py-12 md:py-16 max-w-xl space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-white/70">Justice Onyekachi</p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]">
                The product mechanic
              </h1>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed pr-2">

                I&apos;oduct engineer, AI PM, author and founder of Resido.

                I also write about product, engineering, and startups.

                You can explore my works and feel free to reach out to me for collaborations.


              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 pt-4">
                <Link
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-white/80 transition-colors underline decoration-1 underline-offset-4"
                  href="/profile"
                >
                  Learn more about me &rarr;
                </Link>
                <a
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-white/80 transition-colors underline decoration-1 underline-offset-4"
                  href="#"
                >
                  Learn more about my work &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}