type Props = {
  circuit: {
    image: string
    category: string
    title: string
    price: string
    duration: string
  }
}

const CircuitCard = ({ circuit }: Props) => {
  return (
    <div className="min-w-[360px] shrink-0 snap-start cursor-pointer group">

      {/* IMAGE */}
      <div className="overflow-hidden mb-4">
        <img
          src={circuit.image}
          className="w-full h-[230px] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CATEGORY */}
      <p className="text-[12px] tracking-[2px] text-[#b67852] font-semibold mb-2">
        {circuit.category}
      </p>

      {/* TITLE */}
      <h3 className="text-[20px] font-serif leading-snug mb-3">
        {circuit.title}
      </h3>

      {/* PRICE */}
      <p className="text-[15px]">
        À partir de <span className="font-semibold">{circuit.price} €</span> /pers
      </p>

      <p className="text-[14px] text-gray-600">
        {circuit.duration}
      </p>

    </div>
  )
}

export default CircuitCard