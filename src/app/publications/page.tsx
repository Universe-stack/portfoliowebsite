import { PublicationCard } from "../components/FeaturedPublications";
import { publicationCards } from "../data/publications";

export default function PublicationsPage() {
  return (
    <section className="bg-[#fafafa] text-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">
        <div className="space-y-4 mb-16">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500">Publications</p>
          <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900">
            Browse articles, playbooks, and case studies
          </h1>
          <p className="text-[15px] sm:text-base text-gray-600 max-w-2xl leading-[1.7]">
            Articles, playbooks, and case studies on product, engineering, and systems thinking.
Short, practical reads drawn from real work experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {publicationCards.slice(0, 9).map((publication, idx) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              priority={idx < 2}
              variant="grid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}