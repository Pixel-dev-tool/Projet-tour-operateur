type FeatureCardProps = {
  id: number
  title: string
  text: string
  image: string
  staggered?: boolean
}

const FeatureCard = ({ id, title, text, image, staggered = false }: FeatureCardProps) => {
  return (
    <div
      className={`
        bg-white rounded-lg overflow-visible flex flex-col text-center
        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        ${staggered ? 'mt-12' : ''}
      `}
    >
      {/* Image wrapper with overflow visible so badge can overlap */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[260px] object-cover rounded-t-lg"
        />

        {/* Circular number badge — overlapping the bottom of the image */}
        <div
          className="
            absolute -bottom-7 left-1/2 -translate-x-1/2
            w-17 h-17 rounded-full
            bg-[#e5d5c5] border border-white/50
            flex items-center justify-center
            text-[#7a5c40] font-semibold text-3xl leading-none
            shadow-md z-10
          "
        >
          {id}
        </div>
      </div>

      {/* Card body */}
      <div className="px-5 pt-9 pb-6 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard