import FeatureCard from "../ui/featureCard"
import { features } from "../../../data/features"

const ExpertiseSection = () => {
  return (
    <section className="bg-[#f5f5f5] pb-20">

      {/* ── Brown top banner ── */}
      <div className="bg-[#b9845a] pt-14 pb-28 text-center">
        <h2
          className="
            font-serif font-light text-white
            text-3xl md:text-4xl
            tracking-wide
          "
        >
          Expertise et co-construction
        </h2>
      </div>

      {/* ── Cards container — overlaps the banner via negative margin ── */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {features.map((item, index) => (
            <FeatureCard
              key={item.id}
              {...item}
              staggered={index % 2 !== 0}   /* cards 2 & 4 pushed down */
            />
          ))}
        </div>

        {/* ── Call to Action Button ── */}
        <div className="mt-16 text-center">
          <button
            className="
              bg-[#4f5fa3] hover:bg-[#b9845a] text-white
              font-medium text-base px-8 py-3.5 rounded-md
              transition-colors duration-300
              hover:shadow-lg hover:-translate-y-0.5
              cursor-pointer
            "
          >
            Contacter un conseiller expert
          </button>
        </div>
      </div>

    </section>
  )
}

export default ExpertiseSection